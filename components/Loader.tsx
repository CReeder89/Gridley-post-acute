import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress, {
    circularProgressClasses,
    CircularProgressProps,
} from '@mui/material/CircularProgress';


export default function Loader(props: CircularProgressProps) {
    return (


        <Box sx={{ position: 'relative', width: '20px', margin: '0 auto' }}>
            <CircularProgress
                variant="determinate"
                sx={(theme) => ({
                    color: theme.palette.grey[200],
                    ...theme.applyStyles('dark', {
                        color: theme.palette.grey[800],
                    }),
                })}
                size={20}
                thickness={4}
                {...props}
                value={100}
            />
            <CircularProgress
                variant="indeterminate"
                disableShrink
                sx={(theme) => ({
                    color: '#1a90ff',
                    animationDuration: '550ms',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round',
                    },
                    ...theme.applyStyles('dark', {
                        color: '#308fe8',
                    }),
                })}
                size={20}
                thickness={4}
                {...props}
            />
        </Box>


    );
}