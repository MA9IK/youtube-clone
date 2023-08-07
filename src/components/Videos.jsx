import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return 'Loading...';

  return (
    <Box>
      <Stack
        direction={direction || 'row'}
        flexWrap='wrap'
        justifyContent='start'
        gap={2}>
        {videos.map((item, id) => (
          <Box key={id}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Videos;
