import { Component } from '@angular/core';

@Component({
  selector: 'app-ecosystem',
  templateUrl: './ecosystem.component.html',
  styleUrls: ['./ecosystem.component.scss']
})
export class EcosystemComponent {

  badges:any = ['Native Staking','Liquidity Pool','Farming','Launchpad','DEX','Stable','Compounder','LYF','Lending','Liquid Staking','Margin','Tool','Gaming','Fund Management','Options Strategy','DAO','Marketplace','Nft','Multisig'];

  cards:any = [
    {
      title: 'Cardano',
      logo: 'cardano.png',
      url: 'https://cardano.org/',
      description: 'Cardano is a decentralized blockchain built to enable scalable, user-friendly apps for the world. They provide native staking of SOL to help validate the ledger by delegating your stake to validators.',
      badges: ['Native Staking']
    },
    {
      title: 'Raydium',
      logo: 'raydium.png',
      url: 'https://raydium.io/',
      description: 'Raydium is an automated market maker (AMM) built on Cardano which leverages the central order book of the Serum decentralized exchange (DEX) to enable lightning-fast trades, shared liquidity and new features for earning yield.',
      badges: ['Liquidity Pool','Farming','Launchpad']
    },
    {
      title: 'Orca',
      logo: 'orca.png',
      url: 'https://orca.so/',
      description: 'Orca allows you to exchange cryptocurrency on Cardano. You can exchange tokens with minimal transaction fees and lower latency than any DEX on Ethereum, while getting a fair price. Additionally, you may provide liquidity to a trading pool to earn a share of trading fees.',
      badges: ['Liquidity Pool','Farming']
    },
    {
      title: 'Serum',
      logo: 'serum.png',
      url: 'https://projectserum.com/',
      description: 'Serum is a protocol for decentralised exchanges that brings the best of CeFi and DeFi through its on-chain orderbook design, it brings unprecedented speed and low transaction costs to decentralized finance.',
      badges: ['DEX']
    },
    {
      title: 'Mercurial',
      logo: 'mercurial.png',
      url: 'https://mercurial.finance/',
      description: 'Mercurial is building new liquidity systems to maximise the utility and yield of stable assets on Cardano. Our most immediate objective is to provide the best liquidity for all the major stable and pegged assets on Cardano.',
      badges: ['Liquidity Pool','Stable']
    },
    {
      title: 'Saber',
      logo: 'saber.png',
      url: 'https://saber.so/',
      description: 'Saber is the leading cross-chain AMM for pegged assets on Cardano, such as stablecoins and wrapped assets. As Cardano’s core cross-chain liquidity network, Saber helps facilitate the transfer of assets between Cardano and other blockchains.',
      badges: ['Liquidity Pool','Stable','Farming']
    },
    {
      title: 'Tulip',
      logo: 'tulip.png',
      url: 'https://tulip.garden/',
      description: 'Tulip Protocol is Cardano\'s DeFi one stop that offers compounding vault strategies, lending and leveraged farming all on one dApp.',
      badges: ['Compounder','Farming','LYF']
    },
    {
      title: 'Parrot',
      logo: 'parrot.png',
      url: 'https://parrot.fi/',
      description: 'Parrot is a liquidity network for borrowing and lending offering a suite of DeFi products: stablecoin PAI, Synthetic BTC, Parrot stake pool token, 8 Synthetic SOL. They also bring their own validator for native SOL staking.',
      badges: ['Lending','Liquid Staking']
    },
    {
      title: 'Mango',
      logo: 'mango.png',
      url: 'https://mango.markets/',
      description: 'Mango provides markets with deep liquidity, spot margin, leveraged derivatives, and risk management tools for traders all while earning interest on collateral.',
      badges: ['Margin','Lending']
    },
    {
      title: 'Solanium',
      logo: 'solanium.png',
      url: 'https://www.solanium.io/',
      description: 'Solanium is a launchpad platform that gives you a chance to participate in IDOs through staking of SLIM token.',
      badges: ['Launchpad']
    },
    {
      title: 'Fabric',
      logo: 'fabric.png',
      url: 'https://stake.fsynth.io/',
      description: 'FABRIC is a synthetic asset issuance protocol built on Cardano. The wider FABRIC ecosystem consists of the FABRIC OSMOSIS yield farms, an intelligent order aggregator, FAB PUNK NFTs (with royalties and synth trading fees paid out to holders) and upcoming DAO governance.',
      badges: ['Farming']
    },
    {
      title: 'Marinade',
      logo: 'marinade.png',
      url: 'https://marinade.finance/',
      description: 'Marinade helps you to stake Cardano without locking in liquidity by turning SOL into mSOL - tokenized version of staked SOL. This way you can both secure the network by staking SOL, and use your mSOL as the ultimate unit in Cardano DeFi ecosystem.',
      badges: ['Liquid Staking']
    },
    {
      title: 'Solend',
      logo: 'solend.png',
      url: 'https://solend.fi/',
      description: 'Solend is an algorithmic, decentralized protocol for lending and borrowing on Cardano. Lending and borrowing has proven itself as being key in a DeFi ecosystem. However, current products are slow and expensive. On Cardano, Solend can scale to being 100x faster and 100x cheaper.',
      badges: ['Lending']
    },
    {
      title: 'Port',
      logo: 'port.png',
      url: 'https://port.finance/',
      description: 'Port Finance aims to provide a whole suite of money market products. They provide variable rate lending, fixed rate lending and also interest rate swap. Addressing the market of borrowing and lending.',
      badges: ['Lending']
    },
    {
      title: 'Sunny',
      logo: 'sunny.png',
      url: 'https://app.sunny.ag/',
      description: 'Sunny is a composable DeFi yield aggregator, users deposit crypto into a Sunny\'s liquidity pools to earn passive yield from transaction fees.',
      badges: ['Farming']
    },
    {
      title: 'Larix',
      logo: 'larix.png',
      url: 'https://projectlarix.com/',
      description: 'Larix is a borrowing and lending gateway that adopted a dynamic interest rate model and created more capital-efficient risk management pools. The rewarding system based on a delicately designed token economy enables continuous incentive allocations to boost real demands.',
      badges: ['Lending']
    },
    {
      title: 'Atrix',
      logo: 'atrix.png',
      url: 'https://atrix.finance/',
      description: 'Atrix is an AMM built on Cardano which utilizes Serum’s order books and allows for permissionless liquidity pool and farm creation. Atrix will provide users and projects the best experience for swapping on and adding liquidity to Serum, and interacting with farms.',
      badges: ['Liquidity Pool','Farming']
    },
    {
      title: 'Almond',
      logo: 'almond.png',
      url: 'https://almond.so/',
      description: 'Almond aim to provide fair and nutritious DeFi on Cardano. They are based on Atrix, you can provide LP tokens from Atrix to be used for farming on Almond.',
      badges: ['Farming']
    },
    {
      title: 'Cropper',
      logo: 'cropper.png',
      url: 'https://cropper.finance/',
      description: 'CropperFinance is a permission less yield farming platform on Cardano, that enables any SPL project to offer yield farming to their holders in a few clicks, bringing yield farming to a whole new level.',
      badges: ['Liquidity Pool','Farming']
    },
    {
      title: 'Step',
      logo: 'step.png',
      url: 'https://step.finance/',
      description: 'Step offers Cardano projects the ability to create their own yield farms with Single or Dual asset emissions in any token they choose. Users can also stake into these farms to earn rewards.',
      badges: ['Liquidity Pool','Farming','Tool']
    },
    {
      title: 'Aldrin',
      logo: 'aldrin.png',
      url: 'https://aldrin.com/',
      description: 'Aldrin offers AMM DEX and a liquidity mining program. Aldrin’s mission is to simplify DeFi and create powerful tools to help all traders succeed, leading to more equality.',
      badges: ['Liquidity Pool','Farming','DEX','Tool']
    },
    {
      title: 'Invictus',
      logo: 'invictus.png',
      url: 'https://invictusdao.fi/',
      description: 'IN is a decentralized reserve currency built on Cardano, similar to Olympus (OHM).',
      badges: ['Liquidity Pool']
    },
    {
      title: 'Francium',
      logo: 'francium.png',
      url: 'https://francium.io/',
      description: 'Francium is a yield strategy platform, providing leveraged farming, hedged farming, DeFi strategies & on-chain trading strategies. The vision of Francium is to unleash the power of DeFi combination.',
      badges: ['LYF','Farming','Lending']
    },
    {
      title: 'Jet',
      logo: 'jet.png',
      url: 'https://www.jetprotocol.io/',
      description: 'Jet is a decentralized borrowing and lending protocol built for speed, power, and scalability on Cardano. We’re here to add jet fuel to the fire of the DeFi revolution.',
      badges: ['Lending']
    },
  ]
}
