import { Button, Divider, Typography } from '@mui/material';
import {
  DialogContent,
  NftContent,
  NftImage,
  NftSummary,
  SectionBody,
  SectionTitle,
  StyledDialog,
} from './styles';
import { Store, Description } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Details = ({ isOpen, handleClose, nft }) => {
  const getAddress = (address = '', startLen = 4, endLen = 4) => {
    return `${address.substring(0, startLen)}...${address.substring(
      address.length - endLen,
      address.length,
    )}`;
  };

  const nftUrl = `https://opensea.io/assets/ethereum/${nft?.contractAddress}/${nft?.tokenId}`;

  return (
    <StyledDialog open={isOpen} onClose={handleClose}>
      <DialogContent>
        <NftImage src={nft?.imageUrl} />
        <NftContent>
          <Typography variant="h2">{nft?.title}</Typography>
          {nft?.owner && (
            <Typography>
              Owned by{' '}
              <span
                style={{
                  fontWeight: '600',
                }}
              >
                {getAddress(nft?.owner)}
              </span>
            </Typography>
          )}
          <NftSummary>
            <div>
              <SectionTitle sx={{ paddingTop: '0rem' }}>
                <Description />
                <Typography>Description</Typography>
              </SectionTitle>
              <Divider />
              <SectionBody>
                <Typography fontWeight="600">{nft?.contractName}</Typography>
                <Typography variant="body2">{nft?.description}</Typography>
              </SectionBody>
            </div>
            <Divider />
            <div>
              <SectionTitle>
                <Store />
                <Typography>Purchase</Typography>
              </SectionTitle>
              <Divider />
              <SectionBody>
                <Typography variant="label">Floor Price</Typography>
                <Typography fontWeight="600" mb=".5rem">
                  {nft?.floorPrice}
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  to={nftUrl}
                  target="_blank"
                >
                  Buy On Open sea
                </Button>
              </SectionBody>
            </div>
            <div>
              <Divider />
              <SectionTitle>
                <Store />
                <Typography>Details</Typography>
              </SectionTitle>
              <Divider />
              <SectionBody>
                <Typography>Contract Address: {getAddress(nft?.contractAddress)}</Typography>
                <Typography>Token ID: {nft?.tokenId}</Typography>
                <Typography>Token Standard: {nft?.tokenStandard}</Typography>
              </SectionBody>
            </div>
          </NftSummary>
        </NftContent>
      </DialogContent>
    </StyledDialog>
  );
};

export default Details;
