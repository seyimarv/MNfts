import { Container, Typography } from '@mui/material';
import { Fragment, useEffect, useState, useCallback } from 'react';
import { List } from './styles';
import Card from '../Nft/Card';
import { useSearchParams } from 'react-router-dom';
import { Alchemy, Network } from 'alchemy-sdk';

const config = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

const NftList = ({ searchBy }) => {
  const [nfts, setNfts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let [searchParams] = useSearchParams();
  const baseUrl = `https://eth-mainnet.g.alchemy.com/nft/v2/${process.env.REACT_APP_ALCHEMY_API_KEY}`;
  const address = searchParams.get('address') || '0x1064aA646A7Aedbd40816Fc0C35E044D0244a764';

  const parseNfts = async (nfts) => {
    let nftArray = [];
    for (let item of nfts) {
      const tokenId = item.id.tokenId;
      const contractAddress = item.contract.address;
      const [owner, floorPrice] = await Promise.all([
        alchemy.nft.getOwnersForNft(contractAddress, tokenId),
        alchemy.nft.getFloorPrice(contractAddress),
      ]);
      const nft = {
        tokenId: parseInt(tokenId, 16),
        title: item?.title,
        imageUrl: `${item?.media[0].raw.replace('ipfs://', 'https://ipfs.io/ipfs/')}`,
        description: item?.description,
        contract: item?.contract,
        owner: owner.owners[0],
        floorPrice: `${floorPrice.openSea.floorPrice} ${floorPrice.openSea.priceCurrency}`,
        tokenStandard: item.contractMetadata.tokenType,
        contractAddress,
        contractName: item.contractMetadata.name,
      };
      nftArray = [...nftArray, nft];
    }
    setNfts(nftArray);
  };

  const fetchNftsByOwner = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${baseUrl}/getNFTs?owner=${address}&withMetadata=true&pageSize=12`,
      );
      const nfts = await response.json();
      await parseNfts(nfts.ownedNfts);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  }, [address, baseUrl]);

  const fetchNftsByCollection = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${baseUrl}/getNFTsForCollection?contractAddress=${address}&withMetadata=true&limit=12`,
      );
      const nfts = await response.json();
      await parseNfts(nfts.nfts);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  }, [address, baseUrl]);

  useEffect(() => {
    if (searchBy === 'contractAddress') {
      fetchNftsByCollection();
    } else {
      fetchNftsByOwner();
    }
  }, [searchParams, address, fetchNftsByOwner, searchBy, fetchNftsByCollection]);

  return (
    <Container>
      <Typography variant="h2" mt="5rem" mb="2rem" textAlign={{ xs: 'center', md: 'left' }}>
        Explore NFTS
      </Typography>
      {!isLoading && !nfts.length ? (
        <Typography variant="h2" mt="5rem" textAlign="center">
          No results for your search, please try another address{' '}
        </Typography>
      ) : null}

      {isLoading ? (
        <List>
          {[1, 2, 3, 4].map((no) => (
            <Fragment key={no}>
              <Card loading={isLoading} />
            </Fragment>
          ))}
        </List>
      ) : (
        <List>
          {nfts?.map((nft, index) => (
            <Fragment key={index}>
              <Card nft={nft} />
            </Fragment>
          ))}
        </List>
      )}
    </Container>
  );
};

export default NftList;
