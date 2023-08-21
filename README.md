This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

# KEZAYYA : Decentralized File storage and sharing platform

![Recyclant](https://bafkreievjsq4glmoz4lzvwob6yfsaifpbufsnj47oz47ml4oa6dh4enhbi.ipfs.nftstorage.link/)

## NAVH: Not Another Virtual Hackathon 2023

## Introduction

Kezayya is a web3 project with the aim of helping users store files and share them in a user-friendly manner. Decentralized file storage and sharing system. This project intends to build a web3 version of google drive or dropbox for file storage and sharing. It uses the open zeppelin ERC721 standard to store file metadata ERI in an EVM-based smart contract. The smart contract is deployed on opBNB. opBNB which is an Ethereum scaling and POS Blockchain was the best choice for deployment to reduce the cost of transactions and interaction with the blockchain.

## Web 3.0 technologies Used

Frontend: NextJS, postcss, tailwindcss, Theme
web3 technologies: Infura IPFS, Metamask wallet, Infura RPC, XMTP and Fluence
Backend: Solidity, Node.js

Blockchain deployed to:  Linea Goerli Testnet

## Description

This project was made using several technologies. The front-end was designed using a server-side-rendering javascript tech known as NextJS. the latest version of Next was used because of how fast it was to build the project.  Infurs IPFS Storage was used to store user's file on their decentralized storage. Files can be stored individually and as a folder. When Files are stored on IPFS through Infura, It is retrieved and rendered on users dashboard whenever they are logged in. They can share these files to anyone through a sharing mechansism that is easy to copy out the sharing Link URL.

 Fluence was also employ for P2P File Sharing through their browser ro browser Peer to peer communication technique. The whole world of Fluence was engaing as one browsed through several other case studies. Hope to implemnnbt more of fluence on future projects.
 XMTP is used for wallet to wallet messaging using the XMTP SDK. With this, Users can share links to their files while chatting with friends anbd collaborators.

The smart contract uses ERC-721 specification to hold metadata URI, ethers.js was used to interact with the smart contract. The contract was deployed to Linea blockchain. The entire project Live demo was hosted to Vercel.

## Live DApp hosted on

Live Dapp on Vercel: - <https://kezayya-navh.vercel.app/>

## Contract deployed to Linea Goerli Testnet

Deployed to Linea Goerli Testnet:
  export const fileShareAddress = "0x8D36089AB6eFdB3FEb2D8Ed42F7eC80f3c6d2b11"

  <https://explorer.goerli.linea.build/address/0x8D36089AB6eFdB3FEb2D8Ed42F7eC80f3c6d2b11>


 Youtube video link: <https://youtu.be/4E6aEwCBU0o>

 Video 3 mins - https://youtu.be/-8mAF9cSo4c

 ## List of Consensys Products Used 
Infura, IPFS, Linea

## List of Partner Technology Used

XMTP

## Getting Started

First, run the development server:

```
clone the repo https://github.com/holyaustin/KezayyaNAVH.git
# next is to 
cd KezayyaNAVH
# next is to 
npm install
# create .env
NEXT_PUBLIC_INFURA_IPFS_PROJECT_ID=
NEXT_PUBLIC_INFURA_IPFS_PROJECT_SECRET=
# then
npm run dev
# or
yarn dev
```

Open [http://localhost:3016](http://localhost:3016) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Connect with me and send me a mail

E-mail - <holyaustin@yahoo.com>

stay connected on twitter @holyaustin

# Submission Description NAVH

## Name and summary of the project
Kezaya : This project was made using several technologies. The front-end was designed using a server-side-rendering javascript tech known as NextJS. the latest version of Next was used because of how fast it was to build the project.  Infurs IPFS Storage was used to store user's file on their decentralized storage. Files can be stored individually and as a folder. When Files are stored on IPFS through Infura, It is retrieved and rendered on users dashboard whenever they are logged in. They can share these files to anyone through a sharing mechansism that is easy to copy out the sharing Link URL.

## Names/pseudonyms of team members and contact information (e.g. GitHub handle, email address, etc)
holyaustin -  Sole developer - https://github.com/holyaustin - holyaustin@yahoo.com

## The Bounty submitted for
Make a Dapp That Slaps, No Cap

## An overview of what problem is being addressed (i.e. target industry and pain points addressed)
Many web2 caompanies handle file storage and sharing but the problem is that these company house these files all by themselves. Company policies, government policies or disaster at storage site can make these files to disapper. 
Decentralized Storage solves this issue through having files stored in multiple locations at thesame time thus, making the files availble for retrival even if there is  achallenge is one storage location.

## Future plans for the project
Improve the Onboarding process, analystic integration and billing of higher quota. improve the UI/UX also.

## A list of tech stack (solutions, technology infrastructure, technology services, etc.) used by the team to build your project
Frontend: NextJS, postcss, tailwindcss, Theme
web3 technologies: Infura IPFS, Metamask wallet, Infura RPC, XMTP and Fluence
Backend: Solidity, Node.js

Blockchain deployed to:  Linea Goerli Testnet

## (if required) Log-in credentials for dummy account to access your project demo/prototype
None.