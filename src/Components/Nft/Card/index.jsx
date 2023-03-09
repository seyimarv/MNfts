import { Wrapper, CardImgWrapper, CardImg } from './styles';
import { Typography, Box, Skeleton } from '@mui/material';
import { useState } from 'react';
import Details from '../Modal';

const Card = ({ nft, loading }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Wrapper onClick={openModal}>
        {loading ? (
          <CardImgWrapper>
            <Skeleton
              sx={{
                position: 'absolute',
                left: '0',
                top: '0',
                width: '100%',
                height: '100%',
                borderRadius: '20px',
              }}
            />
          </CardImgWrapper>
        ) : (
          <CardImgWrapper>
            <CardImg src={nft?.imageUrl} alt="nft" />
          </CardImgWrapper>
        )}

        {nft?.title && (
          <Typography mt="1.5rem" px=".4rem" variant="h5">
            {nft?.title}
          </Typography>
        )}
        <Box px=".4rem" pt=".5rem">
          <Typography variant="label">{loading ? <Skeleton /> : 'Floor price'}</Typography>
          <Typography fontWeight="600">{loading ? <Skeleton /> : nft?.floorPrice}</Typography>
        </Box>
      </Wrapper>
      <Details isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)} nft={nft} />
    </>
  );
};

export default Card;
