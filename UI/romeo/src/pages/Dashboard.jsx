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
  Dashboard as DashboardIcon,
  Create as CreateIcon,
  Schedule as ScheduleIcon,
  Analytics as AnalyticsIcon,
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
import { keyframes } from '@mui/material/styles';

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

// Add these styled components after other styled components or constants
const borderGlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Dashboard component
const Dashboard = () => {
  const [currentQuote, setCurrentQuote] = useState("");
  const [activeNav, setActiveNav] = useState("Dashboard");
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
        borderWidth: 3,
        pointBackgroundColor: '#9c27b0',
        pointBorderColor: '#fff',
        pointHoverRadius: 8,
        pointHoverBorderWidth: 3,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#610194',
        tension: 0.4,
        fill: true,
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
        padding: 12,
        titleFont: {
          size: 14,
          family: 'Orbitron'
        },
        bodyFont: {
          size: 12
        },
        displayColors: false,
        callbacks: {
          label: function(context) {
            return `Engagement: ${context.parsed.y}%`;
          }
        }
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
          drawBorder: false,
        },
        ticks: {
          color: '#b388d1',
          font: {
            size: 12,
            family: 'Orbitron'
          }
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
          drawBorder: false,
        },
        ticks: {
          color: '#b388d1',
          font: {
            size: 12,
            family: 'Orbitron'
          },
          callback: function(value) {
            return value + '%';
          }
        }
      },
    },
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeOutQuart'
    },
    interaction: {
      mode: 'nearest',
      intersect: false,
      axis: 'x'
    },
    elements: {
      line: {
        borderCapStyle: 'round',
        borderJoinStyle: 'round'
      },
      point: {
        radius: 6,
        borderWidth: 2,
        hitRadius: 8
      }
    }
  };
  
  const navItems = [
    { label: 'Dashboard', icon: DashboardIcon },
    { label: 'Generate Content', icon: CreateIcon },
    { label: 'Schedule Post', icon: ScheduleIcon },
    { label: 'Analytics', icon: AnalyticsIcon },
  ];

  return (
    <Box sx={{ 
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      padding: '20px 40px',
      backgroundColor: '#13111C'
    }}>
      {/* Top Section with Nav and Welcome */}
      <Box sx={{
        position: 'relative',
        height: '140px',
        marginBottom: '20px'
      }}>
        {/* Navigation Menu */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          display: 'flex',
          gap: '24px',
          alignItems: 'center',
          zIndex: 100
        }}>
          {navItems.map((item) => (
            <Box
              key={item.label}
              onClick={() => setActiveNav(item.label)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: activeNav === item.label ? '#fff' : 'rgba(255,255,255,0.7)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: '8px 16px',
                borderRadius: '8px',
                backgroundColor: activeNav === item.label ? 'rgba(255,255,255,0.1)' : 'transparent',
                '&:hover': {
                  color: '#fff',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  transform: 'translateY(-2px)',
                }
              }}
            >
              <item.icon sx={{ fontSize: '1.2rem' }} />
              <Typography variant="caption" sx={{ fontSize: '1.1rem' }}>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Welcome Section */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          maxWidth: '60%'
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
      </Box>

      {/* Main Content Area */}
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: '45% 20% 30%',
        gap: '2%',
        height: 'calc(100vh - 180px)',
        width: '100%',
        overflow: 'hidden'
      }}>
        {/* Left Column - Main Post */}
        <Box sx={{
          height: '100%',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '10px',
          overflow: 'hidden',
          backgroundColor: 'rgba(11, 79, 215, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 0 40px rgba(11, 79, 215, 0.2)',
            backgroundColor: 'rgba(11, 79, 215, 0.4)'
          }
        }}>
          <Box 
            component="img"
            src={post1}
            alt="Most recent post"
            sx={{
              width: '100%',
              height: '75%',
              objectFit: 'cover'
            }}
          />
          <Box sx={{
            height: '15%',
            display: 'flex',
            alignItems: 'center',
            gap: '30px',
            px: 3,
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderBottom: '1px solid rgba(255,255,255,0.08)'
          }}>
            <HeartIcon sx={{ color: '#ff4f8b', fontSize: 30 }} />
            <Typography sx={{ color: '#fff', fontWeight: 600 }}>123</Typography>
            <ShareIcon sx={{ color: '#00eaff', fontSize: 30 }} />
            <Typography sx={{ color: '#fff', fontWeight: 600 }}>45</Typography>
          </Box>
          <Box sx={{
            height: '10%',
            px: 3,
            py: 1,
            backgroundColor: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Typography variant="body2" sx={{ color: '#eee' }}>
              Heythere! this is a mockup caption for a mockup post
            </Typography>
          </Box>
        </Box>

        {/* Middle Column - Preview Posts & Premium */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2%',
          height: '100%'
        }}>
          {/* Post 2 */}
          <Box sx={{
            height: '31%',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '10px',
            overflow: 'hidden',
            backgroundColor: 'rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.03)',
              boxShadow: '0 0 30px rgba(255,255,255,0.15)',
              backgroundColor: 'rgba(0,0,0,0.4)'
            }
          }}>
            <Box 
              component="img"
              src={post2}
              alt="Post 2"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </Box>

          {/* Post 3 */}
          <Box sx={{
            height: '31%',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '10px',
            overflow: 'hidden',
            backgroundColor: 'rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.03)',
              boxShadow: '0 0 30px rgba(255,255,255,0.15)',
              backgroundColor: 'rgba(0,0,0,0.4)'
            }
          }}>
            <Box 
              component="img"
              src={post3}
              alt="Post 3"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </Box>

          {/* Premium Button */}
          <Box sx={{
            height: '31%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Button
              variant="contained"
              sx={{
                width: '100%',
                height: '100%',
                fontSize: '1.6rem',
                fontFamily: 'Orbitron',
                color: '#fff',
                backgroundColor: 'rgba(0,0,0,0.7)',
                border: 'none',
                borderRadius: '15px',
                cursor: 'pointer',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: `
                  0 0 25px rgba(255, 215, 0, 0.2),
                  0 0 40px rgba(255, 255, 255, 0.2)
                `,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -2,
                  left: -2,
                  right: -2,
                  bottom: -2,
                  background: 'linear-gradient(45deg, #FFD700, #FFA500, #FF8C00, #FFD700)',
                  backgroundSize: '400% 400%',
                  animation: `${borderGlow} 3s ease infinite`,
                  borderRadius: '17px',
                  zIndex: -1
                },
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.85)',
                  transform: 'scale(1.05)',
                  transition: 'all 0.3s ease',
                  boxShadow: `
                    0 0 35px rgba(255, 215, 0, 0.4),
                    0 0 50px rgba(255, 255, 255, 0.3)
                  `
                }
              }}
            >
              <Typography sx={{ 
                fontSize: '1rem', 
                opacity: 0.9,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                fontWeight: 300
              }}>
                Unlock The Future
              </Typography>
              <Typography sx={{ 
                fontSize: '1.8rem',
                fontWeight: 600,
                letterSpacing: '4px'
              }}>
                GO PREMIUM
              </Typography>
            </Button>
          </Box>
        </Box>

        {/* Right Column - Stats */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2%',
          height: '100%'
        }}>
          {/* Metrics Cards */}
          <Box sx={{
            display: 'flex',
            gap: '2%',
            height: '25%'
          }}>
            {/* Total Posts Card */}
            <Box sx={{
              flex: 1,
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '10px',
              p: 2,
              textAlign: 'center',
              backgroundColor: 'rgba(0,0,0,0.3)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, rgba(255,79,139,0.1), rgba(0,234,255,0.1))',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              },
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 0 30px rgba(255,255,255,0.15)',
                backgroundColor: 'rgba(0,0,0,0.4)',
                '&::before': {
                  opacity: 1
                }
              }
            }}>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: '#aaa',
                  fontSize: '1.1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  mb: 1
                }}
              >
                Total posts
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#fff',
                  fontSize: '2rem',
                  textShadow: '0 0 10px rgba(255,255,255,0.5)',
                  fontFamily: 'Orbitron',
                  mb: 1
                }}
              >
                28
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: '#aaa',
                  fontSize: '0.8rem',
                  fontStyle: 'italic',
                  opacity: 0.7
                }}
              >
                (mockup data)
              </Typography>
            </Box>

            {/* Recent Likes Card */}
            <Box sx={{
              flex: 1,
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '10px',
              p: 2,
              textAlign: 'center',
              backgroundColor: 'rgba(0,0,0,0.3)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, rgba(255,79,139,0.1), rgba(0,234,255,0.1))',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              },
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 0 30px rgba(255,255,255,0.15)',
                backgroundColor: 'rgba(0,0,0,0.4)',
                '&::before': {
                  opacity: 1
                }
              }
            }}>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: '#aaa',
                  fontSize: '1.1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  mb: 1
                }}
              >
                Recent likes
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#fff',
                  fontSize: '2rem',
                  textShadow: '0 0 10px rgba(255,255,255,0.5)',
                  fontFamily: 'Orbitron',
                  mb: 1
                }}
              >
                +567
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: '#aaa',
                  fontSize: '0.8rem',
                  fontStyle: 'italic',
                  opacity: 0.7
                }}
              >
                (mockup data)
              </Typography>
            </Box>
          </Box>

          {/* Engagement Rate Chart */}
          <Box sx={{
            height: '38%',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '10px',
            p: 2,
            backgroundColor: 'rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.02)',
              boxShadow: '0 0 30px rgba(255,255,255,0.15)',
              backgroundColor: 'rgba(0,0,0,0.4)'
            }
          }}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              mb: 2
            }}>
              <Typography 
                variant="caption"
                sx={{ 
                  color: '#aaa',
                  fontSize: '1.1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '2px'
                }}
              >
                Engagement rate
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                background: 'rgba(76, 175, 80, 0.1)',
                padding: '4px 12px',
                borderRadius: '20px',
                border: '1px solid rgba(76, 175, 80, 0.2)'
              }}>
                <Typography sx={{ 
                  color: '#fff',
                  fontSize: '1.2rem',
                  fontFamily: 'Orbitron'
                }}>
                  + 4.3 %
                </Typography>
                <UpIcon sx={{ 
                  color: '#4caf50',
                  fontSize: 24,
                  ml: 1,
                  filter: 'drop-shadow(0 0 5px rgba(76, 175, 80, 0.5))'
                }} />
              </Box>
            </Box>
            <Box sx={{ 
              height: 'calc(100% - 40px)',
              position: 'relative'
            }}>
              <Line data={chartData} options={chartOptions} />
            </Box>
          </Box>

          {/* Sentiment Analysis */}
          <Box sx={{
            height: '33%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px'
          }}>
            <Typography 
              variant="caption" 
              sx={{ 
                color: '#aaa',
                fontSize: '1.1rem',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}
            >
              sentiment analysis
            </Typography>
            <Box sx={{
              width: '110px',
              height: '110px',
              borderRadius: '50%',
              border: '2px solid rgba(76, 175, 80, 0.3)',
              backgroundColor: 'rgba(0,0,0,0.4)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -2,
                left: -2,
                right: -2,
                bottom: -2,
                borderRadius: '50%',
                background: 'linear-gradient(45deg, rgba(76, 175, 80, 0.2), rgba(76, 175, 80, 0.1))',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: -1,
                left: -1,
                right: -1,
                bottom: -1,
                borderRadius: '50%',
                border: '2px solid transparent',
                background: 'linear-gradient(45deg, #4caf50, transparent) border-box',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude'
              },
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: `
                  0 0 30px rgba(255,255,255,0.15),
                  0 0 50px rgba(76, 175, 80, 0.2)
                `,
                backgroundColor: 'rgba(0,0,0,0.5)',
                '&::before': {
                  opacity: 1
                }
              }
            }}>
              <HappyIcon sx={{ 
                fontSize: 32,
                color: '#4caf50',
                filter: 'drop-shadow(0 0 10px rgba(76, 175, 80, 0.5))',
                animation: 'float 3s ease-in-out infinite'
              }} />
              <Typography sx={{ 
                color: '#fff',
                fontSize: '0.9rem',
                fontWeight: 500,
                letterSpacing: '1px',
                textShadow: '0 0 10px rgba(255,255,255,0.5)',
                fontFamily: 'Orbitron'
              }}>
                Positive
              </Typography>
              <Typography sx={{ 
                color: '#aaa',
                fontSize: '0.7rem',
                fontStyle: 'italic',
                opacity: 0.7
              }}>
                (mockup data)
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Add keyframe animations */}
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
            50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
            100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </Box>
  );
};

export default Dashboard; 