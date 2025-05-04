import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import {
  FavoriteOutlined as HeartIcon,
  ShareOutlined as ShareIcon,
  ArrowUpward as UpIcon,
  SentimentSatisfiedAlt as HappyIcon,
} from '@mui/icons-material';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip as ChartTooltip, 
  Legend 
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Import post images
import post1 from '../assets/post-images/post1.jpg';
import post2 from '../assets/post-images/post2.jpg';
import post3 from '../assets/post-images/post3.jpg';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, ChartTooltip, Legend);

// Sample quotes array
const quotes = [
  "He who does not obeys himself, must be commanded.",
  "The quieter you become, the more you can hear.",
  "In the middle of difficulty lies opportunity.",
  "The future is a construct of the present.",
  "Embrace the glitch in your programming.",
  "Reality is just a persistent hallucination.",
  "Beyond logic lies truth.",
  "The code is more what you'd call guidelines than actual rules.",
  "Hack the planet, but with kindness.",
  "Obsolescence is just reinvention waiting to happen."
];

// Dashboard component
const Dashboard = () => {
  const [currentQuote, setCurrentQuote] = useState("");
  const userName = "Aditya";
  
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  }, []);
  
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Engagement',
        data: [3.2, 2.8, 3.5, 4.0, 3.8, 4.2, 4.3],
        borderColor: '#610194',
        backgroundColor: 'rgba(97, 1, 148, 0.1)',
        borderWidth: 2,
        pointBackgroundColor: '#9c27b0',
        pointBorderColor: '#fff',
        pointHoverRadius: 5,
        pointHoverBorderWidth: 2,
        tension: 0.3,
      },
    ],
  };
  
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(17, 17, 17, 0.9)',
        titleColor: '#fff',
        bodyColor: '#b388d1',
        borderColor: '#610194',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          color: '#b388d1',
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          color: '#b388d1',
        },
      },
    },
    maintainAspectRatio: false,
  };
  
  return (
    <Box sx={{ 
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden'
    }}>
      {/* Navigation Menu */}
      <Box sx={{
        position: 'absolute',
        top: 20,
        right: 20,
        display: 'flex',
        gap: '24px'
      }}>
        <Typography variant="caption" sx={{ color: '#fff' }}>Dashboard</Typography>
        <Typography variant="caption" sx={{ color: '#fff' }}>Generate Content</Typography>
        <Typography variant="caption" sx={{ color: '#fff' }}>Schedule Post</Typography>
        <Typography variant="caption" sx={{ color: '#fff' }}>Analytics</Typography>
      </Box>

      {/* Welcome Section */}
      <Box sx={{
        position: 'absolute',
        top: 30,
        left: 40
      }}>
        <Typography variant="h5" sx={{ 
          color: '#fff', 
          fontFamily: 'Orbitron', 
          fontWeight: 500,
          fontSize: '50px',
          mb: 1
        }}>
          Welcome, {userName}
        </Typography>
        <Typography sx={{ 
          color: '#aaa', 
          fontStyle: 'italic', 
          fontSize: '25px',
          opacity: 0.7
        }}>
          "{currentQuote}"
        </Typography>
      </Box>

      {/* Main Post Card */}
      <Box sx={{
        position: 'absolute',
        top: 180,
        left: 40,
        width: 700,
        height: 1000,
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '10px',
        overflow: 'hidden',
        backgroundColor: 'rgba(11, 79, 215, 0.3)',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Box 
          component="img"
          src={post1}
          alt="Most recent post"
          sx={{
            width: '100%',
            height: '80%',
            objectFit: 'cover'
          }}
        />
        <Box sx={{
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          gap: '30px',
          px: 3,
          backgroundColor: 'rgba(0,0,0,0.5)',
          borderBottom: '1px solid rgba(255,255,255,0.08)'
        }}>
          <HeartIcon sx={{ color: '#ff4f8b', fontSize: 40 }} />
          <Typography sx={{ color: '#fff', fontWeight: 600 }}>123</Typography>
          <ShareIcon sx={{ color: '#00eaff', fontSize: 60 }} />
          <Typography sx={{ color: '#fff', fontWeight: 600 }}>45</Typography>
        </Box>
        <Box sx={{
          flex: 1,
          px: 3,
          py: 2,
          backgroundColor: 'rgba(0,0,0,0.6)',
        }}>
          <Typography variant="body2" sx={{ color: '#eee' }}>
            Heythere! this is a mockup caption for a mockup post
          </Typography>
        </Box>
      </Box>

      {/* Metrics Cards */}
      <Box sx={{
        position: 'absolute',
        top: 190,
        right: 5,
        width: 800,
        display: 'flex',
        gap: '16px'
      }}>
        {/* Total Posts Card */}
        <Box sx={{
          width: 400,
          height: 200,
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '10px',
          p: 2,
          textAlign: 'center',
          backgroundColor: 'rgba(0,0,0,0.3)'
        }}>
          <Typography variant="caption" sx={{ color: '#aaa', display: 'block', mb: 5 }}>
            Total posts
          </Typography>
          <Typography variant="h6" sx={{ color: '#fff' }}>
            28
          </Typography>
          <Typography variant="caption" sx={{ color: '#aaa' }}>
            (mockup data)
          </Typography>
        </Box>

        {/* Recent Likes Card */}
        <Box sx={{
          width: 400,
          height: 200,
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '10px',
          p: 2,
          textAlign: 'center',
          backgroundColor: 'rgba(0,0,0,0.3)'
        }}>
          <Typography variant="caption" sx={{ color: '#aaa', display: 'block', mb: 5 }}>
            Recent likes
          </Typography>
          <Typography variant="h6" sx={{ color: '#fff' }}>
            +567
          </Typography>
          <Typography variant="caption" sx={{ color: '#aaa' }}>
            (mockup data)
          </Typography>
        </Box>
      </Box>

      {/* Post Preview Cards */}
      <Box sx={{
        position: 'absolute',
        top: 180,
        right: 1000,
        width: 190,
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        {/* Post 2 */}
        <Box sx={{
          width: '170%',
          height: 400,
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '10px',
          overflow: 'hidden',
          backgroundColor: 'rgba(0,0,0,0.3)'
        }}>
          <Box 
            component="img"
            src={post2}
            alt="Post 2"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
        
        {/* Post 3 */}
        <Box sx={{
          width: '170%',
          height: 400,
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '10px',
          overflow: 'hidden',
          backgroundColor: 'rgba(0,0,0,0.3)'
        }}>
          <Box 
            component="img"
            src={post3}
            alt="Post 3"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Box>

      {/* Recent Likes Box */}
      <Box sx={{
        position: 'absolute',
        top: 420,
        right: 240,
        width: 400,
        height: 200,
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '10px',
        p: 2,
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'
      }}>
        <Typography variant="caption" sx={{ color: '#aaa', display: 'block', mb: 5 }}>
          Recent likes
        </Typography>
        <Typography variant="h6" sx={{ color: '#fff' }}>
          +567
        </Typography>
        <Typography variant="caption" sx={{ color: '#aaa' }}>
          (mockup data)
        </Typography>
      </Box>

      {/* Engagement Rate Chart */}
      <Box sx={{
        position: 'absolute',
        top: 640,
        right: 130,
        width: 600,
        height: 200,
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '10px',
        p: 2,
        backgroundColor: 'rgba(0,0,0,0.3)'
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="caption" sx={{ color: '#aaa' }}>
            Engagement rate
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ color: '#fff', fontSize: '30px' }}>
              + 4.3 %
            </Typography>
            <UpIcon sx={{ color: '#4caf50', fontSize: 36, ml: 0.5 }} />
          </Box>
        </Box>
        <Box sx={{ height: '90px' }}>
          <Line data={chartData} options={chartOptions} />
        </Box>
        <Typography variant="caption" sx={{ 
          position: 'absolute',
          bottom: 8,
          right: 8,
          color: '#aaa'
        }}>
          mockup graph
        </Typography>
      </Box>

      {/* Premium Banner */}
      <Box sx={{
        position: 'absolute',
        bottom: 40,
        right: 360,
        width: 800,
        border: '10px solid rgba(255,255,255,0.2)',
        borderRadius: '50px',
        p: 2,
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)'
      }}>
        <Typography variant="body2" sx={{ color: '#fff', mb: 1 }}>
          "Unlock the Future: Go Premium for $10/month!"
        </Typography>
        <Button 
          sx={{ 
            backgroundColor: 'rgba(185, 179, 15, 0.7)',
            color: '#fff',
            textTransform: 'uppercase',
            fontFamily: 'Orbitron',
            '&:hover': {
              backgroundColor: 'rgba(97, 1, 148, 0.9)',
            }
          }}
        >
          GO PREMIUM
        </Button>
      </Box>

      {/* Sentiment Analysis */}
      <Box sx={{
        position: 'absolute',
        bottom: 40,
        right: 5,
        textAlign: 'center',
        width: 400
      }}>
        <Typography variant="caption" sx={{ color: '#aaa', display: 'block', mb: 1 }}>
          sentiment analysis
        </Typography>
        <Box sx={{
          width: 300,
          height: 300,
          margin: '0 auto',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.2)',
          backgroundColor: 'rgba(0,0,0,0.4)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <HappyIcon sx={{ fontSize: 30, color: '#4caf50' }} />
          <Typography variant="caption" sx={{ color: '#fff' }}>
            happy emoji
          </Typography>
          <Typography variant="caption" sx={{ color: '#aaa', fontSize: '10px' }}>
            (mockup data)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard; 