/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useState } from "react";
import { jsx, Box } from 'theme-ui';
//import { NFTStorage } from "nft.storage";
import { useRouter } from 'next/router'
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { create } from 'ipfs-http-client'
import 'dotenv/config';
import fileNFT from "../../artifacts/contracts/kezayya.sol/FileNFT.json";
import { fileShareAddress } from "../../config";

//const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0') 
// https://kezayya.infura-ipfs.io

const projectId = process.env.NEXT_PUBLIC_INFURA_IPFS_PROJECT_ID
console.log("projectId is", projectId)
const projectSecret = process.env.NEXT_PUBLIC_INFURA_IPFS_PROJECT_SECRET
console.log("projectSecret is", projectSecret)
const projectIdAndSecret = `${projectId}:${projectSecret}`
console.log("projectIdAndSecret is", projectIdAndSecret)
const auth = `Basic ${Buffer.from(projectIdAndSecret).toString('base64')}`
console.log("auth is", auth)

const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
      authorization: auth,
  },
})

const MintFile = () => {
  const navigate = useRouter();
  const [fileUrl, setFileUrl] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null);
  const [uploadedFile, setUploadedFile] = useState();
  const [imageView, setImageView] = useState();
  const [metaDataURL, setMetaDataURl] = useState();
  const [txURL, setTxURL] = useState();
  const [txStatus, setTxStatus] = useState();
  const [formInput, updateFormInput] = useState({ name: "" });

  const handleFileUpload = async (event) => {
    console.log("file for upload selected...");
    setUploadedFile(event.target.files[0]);
    const file = event.target.files[0]
    try {
      const added = await client.add(
        file,
        {
          progress: (prog) => console.log(`received: ${prog}`)
        }
      )
      const url = `https://kezayya.infura-ipfs.io/ipfs/${added.path}`
      setFileUrl(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    } 
    setTxStatus("");
    setImageView("");
    setMetaDataURl("");
    setTxURL("");
    setErrorMessage("");
  };

  const uploadNFTContent = async (inputFile) => {
    const { name } = formInput;
    if (!name || !inputFile) return;
        /* first, stringify data */
        const data = JSON.stringify({
          name, image: fileUrl
        })
    
    try {
      console.log("Trying to upload file to ipfs");
      setTxStatus("Uploading Item to IPFS via Infura API.");
      console.log("close to metadata");
      
      const added = await client.add(data)
      const metaData = `https://kezayya.infura-ipfs.io/ipfs/${added.path}`
      /* after file is uploaded to IPFS, return the URL to use it in the transaction */
      setMetaDataURl(metaData);
      console.log("metadata is: ", { metaData });
      return metaData;
    } catch (error) {
      setErrorMessage("Could store file to IPFS - Aborted file upload.");
      console.log("Error Uploading Content", error);
    }
  };

  const sendTxToBlockchain = async (metadata) => {
    try {
      setTxStatus("Adding transaction to Linea Chain ..");
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);

      // const privatefile = formInput.privatefile.toString();

      const connectedContract = new ethers.Contract(fileShareAddress, fileNFT.abi, provider.getSigner());
      console.log("Connected to contract", fileShareAddress);
      console.log("IPFS blockchain uri is ", metadata);

      const mintNFTTx = await connectedContract.createFile(metadata);
      console.log("File successfully created and added to Blockchain");
      await mintNFTTx.wait();
      setTxURL(`https://explorer.goerli.linea.build/tx/${mintNFTTx.hash}`);
      setTxStatus("File addition was successfully!");
      return mintNFTTx;
    } catch (error) {
      setErrorMessage("Failed to send tx to BlockChain .");
      console.log(error);
    }
  };

  const previewNFT = (metaData, mintNFTTx) => {
    console.log("getIPFSGatewayURL2 two is ...");
    const imgViewString = getIPFSGatewayURL(metaData.data.image.pathname);
    console.log("image ipfs path is", imgViewString);
    setImageView(imgViewString);
    setMetaDataURl(getIPFSGatewayURL(metaData.url));
    console.log("File preview completed");
  };

  const mintNFTFile = async (e, uploadedFile) => {
    e.preventDefault();
    // 1. upload File content via Infura Client
    const metaData = await uploadNFTContent(uploadedFile);

    // 2. Mint a File token on Linea Chain
    const mintNFTTx = await sendTxToBlockchain(metaData);

    // 3. preview the minted nft
   //previewNFT(metaData, mintNFTTx);

    //4. Mint Reward
    // mintReward();

    //5. navigate("/explore");
    navigate.push('/dashboard');
  };

  const getIPFSGatewayURL = (ipfsURL) => {
    const urlArray = ipfsURL.split("/");
    console.log("urlArray = ", urlArray);
    const ipfsGateWayURL = `https://${urlArray[2]}.ipfs.nftstorage.link/${urlArray[3]}`;
    console.log("ipfsGateWayURL = ", ipfsGateWayURL)
    return ipfsGateWayURL;
  };

  return (
    <Box as="section"  sx={styles.section}>
      <div className="bg-purple-100 text-4xl text-center text-black font-bold pt-10">
        <h1> Add File</h1>
      </div>
      <div className="flex justify-center bg-purple-100">
        <div className="w-1/2 flex flex-col pb-12 ">
        <input
            placeholder="Give the file a name"
            className="mt-5 border rounded p-4 text-xl"
            onChange={(e) => updateFormInput({ ...formInput, name: e.target.value })}
          />
          <br />

          <div className="MintNFT text-black text-xl">
            <form>
              <h3>Select a File</h3>
              <input type="file" onChange={handleFileUpload} className="text-black mt-2 border rounded  text-xl" />
            </form>
            {txStatus && <p>{txStatus}</p>}
            
            {metaDataURL && <p className="text-blue"><a href={metaDataURL} className="text-blue">Metadata on IPFS</a></p>}
            
            {txURL && <p><a href={txURL} className="text-blue">See the mint transaction</a></p>}
           
            {errorMessage}

            
            {imageView && (
            <iframe
              className="mb-10"
              title="File"
              src={imageView}
              alt="File preview"
              height="50%"
              width="100%"
            />
            )}

          </div>

          <button type="button" onClick={(e) => mintNFTFile(e, uploadedFile)} className="font-bold mt-20 bg-purple-700 text-white text-2xl rounded p-4 shadow-lg">
            Publish File
          </button>
        </div>
      </div>
    </Box>

  );
};
export default MintFile;

const styles = {
  section: {
    backgroundColor: 'primary',
    pt: [17, null, null, 20, null],
    pb: [6, null, null, 12, 16],
  },
};
