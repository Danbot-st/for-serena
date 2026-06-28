import React, { useEffect, useState } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [canEnter, setCanEnter] = useState(false);

  const [activeCapsule, setActiveCapsule] = useState(null);

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDateItem, setSelectedDateItem] = useState(null);
  const [selfieIndex, setSelfieIndex] = useState(0);

  const [voteModal, setVoteModal] = useState(null);
  const [modalSelectedItem, setModalSelectedItem] = useState(null);

  const [suggestions, setSuggestions] = useState([]);
  const [newSuggestion, setNewSuggestion] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setCanEnter(true);
          return 100;
        }

        return prev + 4;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const capsules = [
  {
    id: 1,
    title: "When you miss me but I'm eeping",
    icon: '/stickers/capsule-1-sleep.png',
    image: '/stickers/capsule-1-sleep.png',
    content:
      "Hey cutie, I'm probably sleeping right now and I'm sorry I can't text you back immediately 🥺. But always remember that you're my favorite person and I'm dreaming about you. Checking your texts will always be the first thing I do in the morning. Sleep well or have a great day! I'll text you as soon as I open my eyes hehe 💝",
  },
  {
    id: 2,
    title: 'Whenever Rena feels anxious',
    icon: '/stickers/capsule-2-comfort.png',
    image: '/stickers/capsule-2-comfort.png',
    content:
      'Remember what I told you? I will always find you. Even if you get scared and have bad dreams, I am never letting you go ☺️. So just believe in yourself and me. I will always be by your side supporting you and liking you!!',
  },
  {
    id: 3,
    title: 'When you want to hear why I like you',
    icon: '/stickers/capsule-3-heart.png',
    image: '/stickers/capsule-3-heart.png',
    content:
      "Girl, you're asking why? Hehe. I like your smile, the way you listen to me, and how sweet you are every time we talk. You make me happy just by being you and being comfortable around me. So never doubt it ☺️. I'm glad you're in my life, Rena.",
  },
  {
    id: 4,
    title: 'When you are having a rough day',
    icon: '/stickers/capsule-4-warm-drink.png',
    image: '/stickers/capsule-4-warm-drink.png',
    content:
      "Aw, did something happen today? I'm so sorry I'm not there to give you a big, big hug 🥺. Lean on me as much as you want. You did so well today, and whatever happened, I'm always by your side, so don't be too sad. Text me or talk to me about everything when we call. I'll make sure you feel much better after talking to me!!",
  },
  {
    id: 5,
    title: 'When you just want to see my face',
    icon: '/stickers/capsule-5-polaroid.png',
    image: '/stickers/capsule-5-polaroid.png',
    gallery: ['/selfie1.jpg', '/selfie3.jpg'],
    content:
      "Here are some selfies just for you hehe 🤍 If you miss my face, you can flip through these whenever you want. I'll keep adding more later too :)",
  },
];

  const dateOptions = {
    A: {
      title: 'Option A: Cozy 🏕️',
      items: [
        '🪵 1. Postcard Cabin',
        '🧺 2. Picnic in Mendota',
        '🌮 3. Birrias & Movies',
      ],
    },
    B: {
      title: 'Option B: Adventure 🌋',
      items: [
        '🚗 1. Hotpot in Chicago',
        '🧚 2. Fairytale Town',
        '🌊 3. Michigan Lake',
      ],
    },
    C: {
      title: 'Option C: City Lights 🌆',
      items: [
        '🌅 1. Memorial Union',
        '🏛️ 2. State Street & Capitol',
        '🛶 3. Lake Wingra Kayak',
      ],
    },
  };

  const goPrevSelfie = () => {
    if (!activeCapsule?.gallery) return;

    setSelfieIndex((prev) =>
      prev === 0 ? activeCapsule.gallery.length - 1 : prev - 1
    );
  };

  const goNextSelfie = () => {
    if (!activeCapsule?.gallery) return;

    setSelfieIndex((prev) =>
      prev === activeCapsule.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const openCapsule = (capsule) => {
    setActiveCapsule(capsule);

    if (capsule.id === 5) {
      setSelfieIndex(0);
    }
  };

  const getLoadingMessage = () => {
    if (loadingProgress < 25) return 'Loading memories...';
    if (loadingProgress < 50) return 'Preparing hugs...';
    if (loadingProgress < 75) return 'Collecting love...';
    if (loadingProgress < 100) return 'Almost there...';
    return 'Welcome back 🌸';
  };

  const loadingTips = [
    'You are so precious to me.',
    'Take care of yourself.',
    "Don't skip meals.",
    'Drink water.',
    'I miss you already.',
  ];

  const currentTip =
    loadingTips[Math.floor((loadingProgress / 20) % loadingTips.length)];

  const pixelDecorations = [
    { icon: '♡', top: '7%', left: '7%', size: '28px', rotate: '-8deg' },
    { icon: '✦', top: '12%', right: '9%', size: '24px', rotate: '12deg' },
    { icon: '♥', top: '24%', left: '4%', size: '20px', rotate: '10deg' },
    { icon: '✿', top: '31%', right: '5%', size: '26px', rotate: '-10deg' },
    { icon: '♡', top: '47%', left: '9%', size: '24px', rotate: '15deg' },
    { icon: '✧', top: '55%', right: '10%', size: '22px', rotate: '-12deg' },
    { icon: '♥', top: '70%', left: '6%', size: '18px', rotate: '-7deg' },
    { icon: '✿', top: '78%', right: '7%', size: '24px', rotate: '12deg' },
    { icon: '♡', top: '88%', left: '16%', size: '22px', rotate: '8deg' },
    { icon: '✦', top: '92%', right: '18%', size: '20px', rotate: '-8deg' },
  ];

 const sidePixelStickers = [
  {
    src: '/stickers/pixel-heart-solid.png',
    top: '12%',
    left: '4%',
    size: 96,
    rotate: '-9deg',
  },
  {
    src: '/stickers/pixel-heart-outline.png',
    top: '27%',
    left: '6%',
    size: 82,
    rotate: '7deg',
  },
  {
    src: '/stickers/pixel-sakura.png',
    top: '42%',
    left: '4.5%',
    size: 88,
    rotate: '-7deg',
  },
  {
    src: '/stickers/pixel-bow.png',
    top: '58%',
    left: '5.5%',
    size: 100,
    rotate: '8deg',
  },
  {
    src: '/stickers/pixel-speech-heart.png',
    top: '74%',
    left: '4%',
    size: 88,
    rotate: '-7deg',
  },
  {
    src: '/stickers/pixel-sparkle.png',
    top: '88%',
    left: '6%',
    size: 82,
    rotate: '6deg',
  },

  {
    src: '/stickers/pixel-envelope.png',
    top: '13%',
    right: '4%',
    size: 104,
    rotate: '8deg',
  },
  {
    src: '/stickers/pixel-heart-outline.png',
    top: '28%',
    right: '6%',
    size: 82,
    rotate: '-7deg',
  },
  {
    src: '/stickers/pixel-kitty.png',
    top: '43%',
    right: '4.5%',
    size: 96,
    rotate: '6deg',
  },
  {
    src: '/stickers/pixel-heart-solid.png',
    top: '59%',
    right: '5.5%',
    size: 92,
    rotate: '-8deg',
  },
  {
    src: '/stickers/pixel-flower-charm.png',
    top: '75%',
    right: '4%',
    size: 90,
    rotate: '7deg',
  },
  {
    src: '/stickers/pixel-sparkle.png',
    top: '88%',
    right: '6%',
    size: 82,
    rotate: '-6deg',
  },
];

  const PixelDecorations = () => (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {pixelDecorations.map((item, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: item.top,
            left: item.left,
            right: item.right,
            fontSize: item.size,
            color: '#E87CB0',
            opacity: 0.32,
            transform: `rotate(${item.rotate})`,
            fontFamily: "'VT323', monospace",
            textShadow: '3px 3px 0px rgba(255,255,255,0.85)',
          }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );

  const SidePixelDecorations = () => (
  <div
    style={{
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden',
    }}
  >
    {sidePixelStickers.map((item, index) => (
      <div
        key={index}
        style={{
          position: 'absolute',
          top: item.top,
          left: item.left,
          right: item.right,
          width: `${item.size + 28}px`,
          height: `${item.size + 28}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: `rotate(${item.rotate})`,
          borderRadius: '26px',
          background:
            'radial-gradient(circle, rgba(255,255,255,0.72) 0%, rgba(255,245,250,0.42) 48%, rgba(255,245,250,0) 72%)',
          filter: 'drop-shadow(5px 6px 0px rgba(232, 124, 176, 0.18))',
        }}
      >
        <img
          src={item.src}
          alt=""
          style={{
            width: `${item.size}px`,
            display: 'block',
            opacity: 1,
            imageRendering: 'pixelated',
            filter: `
              drop-shadow(0px 0px 2px rgba(255,255,255,0.95))
              drop-shadow(0px 0px 7px rgba(255,255,255,0.9))
              drop-shadow(4px 5px 0px rgba(232, 124, 176, 0.32))
            `,
          }}
        />
      </div>
    ))}
  </div>
);

  const handleAddSuggestion = (e) => {
    e.preventDefault();

    if (!newSuggestion.trim()) return;

    setSuggestions([...suggestions, newSuggestion]);
    setNewSuggestion('');
  };

  const openVoteModal = (opt) => {
    setVoteModal(opt);

    if (selectedOption === opt && selectedDateItem !== null) {
      setModalSelectedItem(selectedDateItem);
    } else {
      setModalSelectedItem(0);
    }
  };

  const closeVoteModal = () => {
    setVoteModal(null);
    setModalSelectedItem(null);
  };

  const handleVoteConfirm = () => {
    setSelectedOption(voteModal);
    setSelectedDateItem(modalSelectedItem);
    setVoteModal(null);
    setModalSelectedItem(null);
  };

  const mainBgStyle = {
  backgroundColor: '#F8CFE3',
  backgroundImage: `
  linear-gradient(rgba(255, 207, 227, 0.18), rgba(255, 207, 227, 0.18)),
  url('/pixel-bg.png')
`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '24px',
  paddingBottom: '96px',
  boxSizing: 'border-box',
  fontFamily: "'Fredoka', sans-serif",
  position: 'relative',
  overflow: 'hidden',
};

  const windowStyle = {
    backgroundColor: '#FFF5FA',
    border: '4px solid #FFE3F0',
    borderRadius: '24px',
    boxShadow: '10px 10px 0px 0px #E87CB0',
    width: '100%',
    maxWidth: '650px',
    overflow: 'hidden',
    marginBottom: '32px',
    boxSizing: 'border-box',
    position: 'relative',
    zIndex: 1,
  };

  const titleBarStyle = {
    backgroundColor: '#E87CB0',
    padding: '10px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '3px solid #FFD4E8',
    color: '#ffffff',
    fontFamily: "'VT323', monospace",
    fontSize: '20px',
  };

  if (isLoading) {
    return (
      <div
        onClick={() => {
          if (canEnter) setIsLoading(false);
        }}
        style={{
          minHeight: '100vh',
          width: '100%',
          backgroundColor: '#F8CFE3',
backgroundImage: `
  linear-gradient(rgba(255, 207, 227, 0.12), rgba(255, 207, 227, 0.12)),
  url('/pixel-bg.png')
`,
backgroundSize: 'cover',
backgroundPosition: 'center center',
backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          boxSizing: 'border-box',
          fontFamily: "'Fredoka', sans-serif",
          position: 'relative',
          overflow: 'hidden',
          cursor: canEnter ? 'pointer' : 'default',
        }}
      >
       <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;500;600;700&family=Fredoka:wght@400;500;600;700&family=VT323&display=swap"
/>

        <PixelDecorations />
        <SidePixelDecorations />

        {['🌸', '♡', '✦', '💗', '✿'].map((item, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: '-40px',
              left: `${15 + index * 18}%`,
              fontSize: `${22 + index * 2}px`,
              opacity: 0.45,
              animation: `fallPetal ${5 + index}s linear infinite`,
              animationDelay: `${index * 0.7}s`,
              pointerEvents: 'none',
            }}
          >
            {item}
          </div>
        ))}

        <div
          style={{
            width: '100%',
            maxWidth: '560px',
            padding: '36px',
            textAlign: 'center',
            backgroundColor: '#FFF5FA',
            border: '4px solid #FFE3F0',
            borderRadius: '30px',
            boxShadow: '12px 12px 0px 0px #E87CB0',
            boxSizing: 'border-box',
            position: 'relative',
            zIndex: 1,
            animation: 'softFloat 2.8s ease-in-out infinite',
          }}
        >
          <div
            style={{
              fontSize: '54px',
              marginBottom: '14px',
              animation: 'flowerBreath 1.8s ease-in-out infinite',
            }}
          >
            🌸
          </div>

          <h1
            style={{
              color: '#E87CB0',
              fontSize: '42px',
              margin: '0 0 10px 0',
              fontFamily: "'DynaPuff', cursive",
              fontWeight: '600',
            }}
          >
            Serena&apos;s World
          </h1>

          <p
            style={{
              color: '#F09DC3',
              fontSize: '15px',
              fontWeight: '700',
              margin: '0 0 24px 0',
            }}
          >
            {getLoadingMessage()}
          </p>

          <div
            style={{
              width: '100%',
              height: '24px',
              backgroundColor: '#FFE8F3',
              borderRadius: '999px',
              border: '3px solid #FFD4E8',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: `${loadingProgress}%`,
                height: '100%',
                backgroundColor: '#E87CB0',
                borderRadius: '999px',
                transition: 'width 0.1s linear',
              }}
            />

            <span
              style={{
                position: 'absolute',
                top: '-7px',
                left: `calc(${loadingProgress}% - 12px)`,
                fontSize: '24px',
                transition: 'left 0.1s linear',
                filter: 'drop-shadow(2px 2px 0px #fff)',
              }}
            >
              {loadingProgress >= 100 ? '🌸' : '♡'}
            </span>
          </div>

          <div style={{ marginTop: '24px' }}>
            <span
              style={{
                backgroundColor: '#FFF0F7',
                padding: '12px 24px',
                borderRadius: '16px',
                border: '3px solid #FFD4E8',
                color: '#E87CB0',
                fontSize: '20px',
                fontWeight: '700',
                display: 'inline-block',
              }}
            >
              {canEnter
                ? 'CLICK ANYWHERE TO ENTER ♡'
                : `LOADING SERENA'S WORLD... ${loadingProgress}%`}
            </span>
          </div>

          <div
            style={{
              marginTop: '18px',
              color: '#9a6b7f',
              fontSize: '14px',
              fontWeight: '600',
              opacity: 0.85,
            }}
          >
            Tip: {currentTip}
          </div>
        </div>

        <style>
          {`
            @keyframes flowerBreath {
              0%, 100% {
                transform: scale(1);
              }

              50% {
                transform: scale(1.14);
              }
            }

            @keyframes softFloat {
              0%, 100% {
                transform: translateY(0px);
              }

              50% {
                transform: translateY(-8px);
              }
            }

            @keyframes fallPetal {
              0% {
                transform: translateY(-60px) rotate(0deg);
                opacity: 0;
              }

              15% {
                opacity: 0.55;
              }

              100% {
                transform: translateY(110vh) rotate(260deg);
                opacity: 0;
              }
            }
          `}
        </style>
      </div>
    );
  }

  if (activeCapsule) {
    return (
      <div style={mainBgStyle}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;500;600;700&family=Fredoka:wght@400;500;600;700&family=VT323&display=swap"
        />

        <PixelDecorations />
        <SidePixelDecorations />

        <div
          style={{
            width: '100%',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              ...windowStyle,
              maxWidth: activeCapsule.id === 5 ? '1080px' : '980px',
              backgroundColor: '#FFF7FB',
            }}
          >
            <div style={titleBarStyle}>
              <div style={{ flexGrow: 1 }}>
                {activeCapsule.id === 5
                  ? 'SELFIE_ALBUM.JPG'
                  : 'READING_MESSAGE.TXT'}
              </div>

              <button
                onClick={() => setActiveCapsule(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  fontWeight: '700',
                  fontFamily: "'Fredoka', sans-serif",
                }}
              >
                [BACK]
              </button>
            </div>

            <div
              style={{
                padding: '40px',
                display: 'flex',
                gap: '32px',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ flex: '1 1 420px', minWidth: '280px' }}>
                <h2
                  style={{
                    color: '#E87CB0',
                    fontSize: '38px',
                    lineHeight: '1.25',
                    margin: '0 0 24px 0',
                    fontFamily: "'DynaPuff', cursive",
                    fontWeight: '600',
                    textAlign: 'center',
                  }}
                >
                  {activeCapsule.title}
                </h2>

                <div
                  style={{
                    backgroundColor: '#FCEFF6',
                    padding: '28px 30px',
                    borderRadius: '24px',
                    border: '3px dashed #F4B8D5',
                    textAlign: 'left',
                    marginBottom: '28px',
                  }}
                >
                  <p
                    style={{
                      fontSize: '16px',
                      color: '#565656',
                      lineHeight: '1.95',
                      whiteSpace: 'pre-line',
                      margin: 0,
                      textAlign: 'left',
                      fontFamily: "'Fredoka', sans-serif",
                      fontWeight: '500',
                    }}
                  >
                    {activeCapsule.content}
                  </p>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <button
                    onClick={() => setActiveCapsule(null)}
                    style={{
                      backgroundColor: '#E87CB0',
                      border: 'none',
                      color: '#fff',
                      padding: '14px 34px',
                      borderRadius: '18px',
                      fontSize: '15px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      boxShadow: '5px 5px 0px 0px #F4B8D5',
                      fontFamily: "'DynaPuff', cursive",
                    }}
                  >
                    BACK TO LIST
                  </button>
                </div>
              </div>

              <div
                style={{
                  flex: activeCapsule.id === 5 ? '0 1 430px' : '0 1 340px',
                  width: '100%',
                  maxWidth: activeCapsule.id === 5 ? '430px' : '340px',
                  margin: '0 auto',
                  textAlign: 'center',
                }}
              >
                {activeCapsule.gallery ? (
                  <div
                    style={{
                      backgroundColor: '#FFF0F7',
                      border: '3px solid #F8D9E8',
                      borderRadius: '30px',
                      padding: '18px',
                      boxShadow: '8px 8px 0px 0px rgba(232,124,176,0.22)',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#FFF8FC',
                        border: '2px solid #FBE1EE',
                        borderRadius: '24px',
                        padding: '16px',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '15px',
                          fontWeight: '700',
                          color: '#E87CB0',
                          marginBottom: '14px',
                          fontFamily: "'DynaPuff', cursive",
                          letterSpacing: '0.5px',
                        }}
                      >
                        ♡ SELFIE ALBUM ♡
                      </div>

                      <div
                        style={{
                          backgroundColor: '#ffffff',
                          border: '2px solid #F8D9E8',
                          borderRadius: '22px',
                          padding: '12px',
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: '#FFF7FB',
                            borderRadius: '18px',
                            minHeight: '430px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                            padding: '10px',
                          }}
                        >
                          <img
                            src={activeCapsule.gallery[selfieIndex]}
                            alt={`selfie-${selfieIndex + 1}`}
                            style={{
                              width: '100%',
                              height: '400px',
                              objectFit: 'contain',
                              borderRadius: '16px',
                              display: 'block',
                              transition: 'all 0.3s ease',
                            }}
                          />
                        </div>

                        <div
                          style={{
                            marginTop: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '14px',
                          }}
                        >
                          <button
                            onClick={goPrevSelfie}
                            style={{
                              width: '44px',
                              height: '44px',
                              borderRadius: '50%',
                              border: '3px solid #fff',
                              backgroundColor: '#E87CB0',
                              color: '#fff',
                              fontSize: '24px',
                              fontWeight: '700',
                              cursor: 'pointer',
                              boxShadow: '3px 3px 0px #F4B8D5',
                              lineHeight: '1',
                            }}
                          >
                            ‹
                          </button>

                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              gap: '8px',
                              minWidth: '60px',
                            }}
                          >
                            {activeCapsule.gallery.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => setSelfieIndex(index)}
                                style={{
                                  width: selfieIndex === index ? '26px' : '12px',
                                  height: '12px',
                                  borderRadius: '999px',
                                  border: 'none',
                                  cursor: 'pointer',
                                  backgroundColor:
                                    selfieIndex === index
                                      ? '#E87CB0'
                                      : '#F8D9E8',
                                  transition: 'all 0.2s ease',
                                }}
                              />
                            ))}
                          </div>

                          <button
                            onClick={goNextSelfie}
                            style={{
                              width: '44px',
                              height: '44px',
                              borderRadius: '50%',
                              border: '3px solid #fff',
                              backgroundColor: '#E87CB0',
                              color: '#fff',
                              fontSize: '24px',
                              fontWeight: '700',
                              cursor: 'pointer',
                              boxShadow: '3px 3px 0px #F4B8D5',
                              lineHeight: '1',
                            }}
                          >
                            ›
                          </button>
                        </div>
                      </div>

                      <div
                        style={{
                          marginTop: '16px',
                          display: 'grid',
                          gridTemplateColumns: 'repeat(2, 1fr)',
                          gap: '10px',
                        }}
                      >
                        {activeCapsule.gallery.map((photo, index) => (
                          <button
                            key={index}
                            onClick={() => setSelfieIndex(index)}
                            style={{
                              border:
                                selfieIndex === index
                                  ? '3px solid #E87CB0'
                                  : '2px solid #F8D9E8',
                              borderRadius: '14px',
                              padding: '4px',
                              backgroundColor: '#fff',
                              cursor: 'pointer',
                              boxShadow:
                                selfieIndex === index
                                  ? '3px 3px 0px rgba(232,124,176,0.25)'
                                  : 'none',
                            }}
                          >
                            <img
                              src={photo}
                              alt={`thumb-${index + 1}`}
                              style={{
                                width: '100%',
                                height: '88px',
                                objectFit: 'cover',
                                borderRadius: '9px',
                                display: 'block',
                              }}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      backgroundColor: '#FFF0F7',
                      border: '3px solid #F8D9E8',
                      borderRadius: '26px',
                      padding: '18px',
                      boxShadow: '6px 6px 0px 0px rgba(232,124,176,0.18)',
                    }}
                  >
                    <img
                      src={activeCapsule.image}
                      alt={activeCapsule.title}
                      style={{
                        width: '100%',
                        display: 'block',
                        borderRadius: '18px',
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={mainBgStyle}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;500;600;700&family=Fredoka:wght@400;500;600;700&family=VT323&display=swap"
      />

      <PixelDecorations />
      <SidePixelDecorations />

      <div style={windowStyle}>
        <div style={titleBarStyle}>
          <div style={{ display: 'flex', gap: '6px', marginRight: '16px' }}>
            <div
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: '#fff',
                borderRadius: '50%',
              }}
            />
            <div
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: '#fff',
                borderRadius: '50%',
              }}
            />
          </div>

          <div style={{ flexGrow: 1 }}>WELCOME_SERENA.EXE</div>
          <div style={{ opacity: 0.5, fontSize: '14px' }}>_ o X</div>
        </div>

        <div style={{ padding: '32px', textAlign: 'center' }}>
          <h1
            style={{
              fontSize: '38px',
              color: '#E87CB0',
              margin: '0 0 8px 0',
              fontFamily: "'DynaPuff', cursive",
              fontWeight: '600',
            }}
          >
            For My Favorite Person, Serena ✨
          </h1>

          <p
            style={{
              fontSize: '13px',
              color: '#F09DC3',
              fontWeight: '700',
              letterSpacing: '2px',
              margin: 0,
              fontFamily: "'Fredoka', sans-serif",
            }}
          >
            OPEN A CAPSULE WHENEVER YOU NEED ME.
          </p>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          width: '100%',
          maxWidth: '760px',
          marginBottom: '48px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {capsules.map((capsule) => (
          <button
            key={capsule.id}
            onClick={() => openCapsule(capsule)}
            style={{
              backgroundColor: '#FFF7FB',
              border: '4px solid #FFE3F0',
              borderRadius: '22px',
              overflow: 'hidden',
              boxShadow: '6px 6px 0px 0px #E87CB0',
              cursor: 'pointer',
              padding: 0,
              textAlign: 'left',
              position: 'relative',
              minHeight: '220px',
            }}
          >
            <div
              style={{
                backgroundColor: '#FDECF5',
                padding: '6px 12px',
                borderBottom: '2px solid #F7C7DE',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontSize: '12px',
                  color: '#E87CB0',
                  fontFamily: "'VT323', monospace",
                }}
              >
                CAPSULE_0{capsule.id}.DAT
              </span>

              <div
                style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#E87CB0',
                  borderRadius: '50%',
                }}
              />
            </div>

              <div
  style={{
    position: 'absolute',
    right: '18px',
    bottom: '16px',
    padding: '7px 12px',
    borderRadius: '999px',
    backgroundColor: '#FFF0F7',
    border: '2px dashed #F4B8D5',
    color: '#E87CB0',
    fontSize: '12px',
    fontWeight: '700',
    fontFamily: "'Fredoka', sans-serif",
    letterSpacing: '0.5px',
    pointerEvents: 'none',
  }}
>
  OPEN ME ♡
</div>
            <div style={{ padding: '24px' }}>
              <div
  style={{
    width: '82px',
    height: '82px',
    marginBottom: '14px',
  }}
>
  <img
    src={capsule.icon}
    alt=""
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      display: 'block',
      filter: 'drop-shadow(0 6px 8px rgba(232,124,176,0.2))',
    }}
  />
</div>

              <h2
                style={{
                  fontSize: '18px',
                  color: '#4F4F4F',
                  lineHeight: '1.35',
                  margin: '0 0 32px 0',
                  fontFamily: "'Fredoka', sans-serif",
                  fontWeight: '600',
                  maxWidth: '72%',
                }}
              >
                {capsule.title}
              </h2>
            </div>

           
          </button>
        ))}
      </div>

      <div
        style={{
          ...windowStyle,
          maxWidth: '900px',
        }}
      >
        <div style={titleBarStyle}>
          <div>DATE_PLAN_MANAGER.SYS</div>
          <div style={{ opacity: 0.5, fontSize: '14px' }}>_ o X</div>
        </div>

        <div style={{ padding: '36px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2
              style={{
                fontSize: '36px',
                color: '#E87CB0',
                margin: '0 0 4px 0',
                fontFamily: "'DynaPuff', cursive",
                fontWeight: '600',
              }}
            >
              ✨ When I&apos;m Back: Our Date Plan ✨
            </h2>

            <p
              style={{
                fontSize: '13px',
                color: '#F09DC3',
                fontWeight: '700',
                margin: 0,
                fontFamily: "'Fredoka', sans-serif",
              }}
            >
              SELECT YOUR FAVORITE VIBE!
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
              marginBottom: '32px',
            }}
          >
            {['A', 'B', 'C'].map((opt) => (
              <div
                key={opt}
                onClick={() => openVoteModal(opt)}
                style={{
                  padding: '22px',
                  border:
                    selectedOption === opt
                      ? '4px solid #E87CB0'
                      : '4px solid #F8D9E8',
                  backgroundColor:
                    selectedOption === opt ? '#FDECF5' : '#FFF8FC',
                  borderRadius: '22px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  boxShadow:
                    selectedOption === opt
                      ? '6px 6px 0px 0px rgba(232,124,176,0.25)'
                      : 'none',
                }}
              >
                <div
                  style={{
                    fontWeight: '700',
                    color: '#E87CB0',
                    fontSize: '16px',
                    marginBottom: '12px',
                    fontFamily: "'Fredoka', sans-serif",
                  }}
                >
                  {dateOptions[opt].title}
                </div>

                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    fontSize: '13px',
                    color: '#666',
                    lineHeight: '1.9',
                    fontFamily: "'Fredoka', sans-serif",
                    fontWeight: '500',
                  }}
                >
                  {dateOptions[opt].items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <div
                  style={{
                    marginTop: '18px',
                    padding: '10px 12px',
                    borderRadius: '999px',
                    textAlign: 'center',
                    backgroundColor:
                      selectedOption === opt ? '#E87CB0' : '#FFF0F7',
                    border:
                      selectedOption === opt
                        ? '2px solid #E87CB0'
                        : '2px dashed #F4B8D5',
                    color: selectedOption === opt ? '#ffffff' : '#E87CB0',
                    fontSize: '13px',
                    fontWeight: '700',
                    fontFamily: "'Fredoka', sans-serif",
                  }}
                >
                  {selectedOption === opt
                    ? 'Picked by you 💗'
                    : '♡ Pick this date'}
                </div>

                {selectedOption === opt && selectedDateItem !== null && (
                  <div
                    style={{
                      marginTop: '10px',
                      padding: '10px 12px',
                      borderRadius: '14px',
                      backgroundColor: '#FFF0F7',
                      border: '2px solid #F8D9E8',
                      color: '#E87CB0',
                      fontSize: '12px',
                      fontWeight: '700',
                      textAlign: 'center',
                      fontFamily: "'Fredoka', sans-serif",
                    }}
                  >
                    Your pick: {dateOptions[opt].items[selectedDateItem]}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div
            style={{
              borderTop: '2px dashed #F4C7DC',
              paddingTop: '24px',
            }}
          >
            <p
              style={{
                fontSize: '13px',
                color: '#888',
                fontWeight: '700',
                margin: '0 0 12px 0',
                fontFamily: "'Fredoka', sans-serif",
              }}
            >
              💡 WANT TO ADD A CUSTOM DATE IDEA?
            </p>

            <form
              onSubmit={handleAddSuggestion}
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
              }}
            >
              <input
                type="text"
                value={newSuggestion}
                onChange={(e) => setNewSuggestion(e.target.value)}
                placeholder="Type your date idea here..."
                style={{
                  flex: 1,
                  minWidth: '240px',
                  padding: '12px 18px',
                  border: '2px solid #F8D9E8',
                  borderRadius: '14px',
                  outline: 'none',
                  backgroundColor: '#FFF7FB',
                  fontFamily: "'Fredoka', sans-serif",
                  fontSize: '14px',
                  fontWeight: '500',
                }}
              />

              <button
                type="submit"
                style={{
                  padding: '10px 24px',
                  backgroundColor: '#E87CB0',
                  border: 'none',
                  color: '#fff',
                  borderRadius: '14px',
                  fontSize: '13px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '2px 2px 0px 0px #F4B8D5',
                  fontFamily: "'Fredoka', sans-serif",
                }}
              >
                ADD
              </button>
            </form>

            {suggestions.length > 0 && (
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginTop: '16px',
                  backgroundColor: '#FDECF5',
                  padding: '12px',
                  borderRadius: '12px',
                  border: '1px dashed #F4B8D5',
                }}
              >
                {suggestions.map((item, index) => (
                  <span
                    key={index}
                    style={{
                      padding: '6px 12px',
                      backgroundColor: '#FFF8FC',
                      border: '2px solid #F8D9E8',
                      borderRadius: '8px',
                      fontSize: '12px',
                      color: '#E87CB0',
                      fontWeight: '600',
                      fontFamily: "'Fredoka', sans-serif",
                    }}
                  >
                    ✨ {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {voteModal && (
        <div
          onClick={closeVoteModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(232,124,176,0.28)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            boxSizing: 'border-box',
            zIndex: 999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '460px',
              backgroundColor: '#FFF7FB',
              border: '4px solid #FFE3F0',
              borderRadius: '26px',
              boxShadow: '10px 10px 0px 0px #E87CB0',
              overflow: 'hidden',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                backgroundColor: '#E87CB0',
                color: '#ffffff',
                padding: '12px 16px',
                fontFamily: "'VT323', monospace",
                fontSize: '20px',
                textAlign: 'left',
              }}
            >
              DATE_VOTE_POPUP.EXE
            </div>

            <div style={{ padding: '32px' }}>
              <div style={{ fontSize: '42px', marginBottom: '12px' }}>🌸</div>

              <h2
                style={{
                  color: '#E87CB0',
                  fontSize: '30px',
                  margin: '0 0 12px 0',
                  fontFamily: "'DynaPuff', cursive",
                  fontWeight: '600',
                }}
              >
                Pick this date?
              </h2>

              <p
                style={{
                  color: '#666',
                  fontSize: '15px',
                  lineHeight: '1.7',
                  margin: '0 0 18px 0',
                  fontFamily: "'Fredoka', sans-serif",
                  fontWeight: '500',
                }}
              >
                You are choosing <br />
                <strong style={{ color: '#E87CB0' }}>
                  {dateOptions[voteModal].title}
                </strong>
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  marginBottom: '24px',
                }}
              >
                {dateOptions[voteModal].items.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setModalSelectedItem(index)}
                    style={{
                      padding: '14px 16px',
                      borderRadius: '16px',
                      border:
                        modalSelectedItem === index
                          ? '3px solid #E87CB0'
                          : '3px solid #F8D9E8',
                      backgroundColor:
                        modalSelectedItem === index ? '#FFF0F7' : '#ffffff',
                      color: modalSelectedItem === index ? '#E87CB0' : '#666',
                      fontSize: '14px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: "'Fredoka', sans-serif",
                      boxShadow:
                        modalSelectedItem === index
                          ? '3px 3px 0px 0px #F4B8D5'
                          : 'none',
                    }}
                  >
                    {modalSelectedItem === index ? '💗 ' : '♡ '}
                    {item}
                  </button>
                ))}
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <button
                  onClick={closeVoteModal}
                  style={{
                    padding: '12px 18px',
                    borderRadius: '14px',
                    border: '2px solid #F8D9E8',
                    backgroundColor: '#ffffff',
                    color: '#E87CB0',
                    fontWeight: '700',
                    cursor: 'pointer',
                    fontFamily: "'Fredoka', sans-serif",
                  }}
                >
                  CANCEL
                </button>

                <button
                  onClick={handleVoteConfirm}
                  style={{
                    padding: '12px 18px',
                    borderRadius: '14px',
                    border: 'none',
                    backgroundColor: '#E87CB0',
                    color: '#ffffff',
                    fontWeight: '700',
                    cursor: 'pointer',
                    boxShadow: '3px 3px 0px 0px #F4B8D5',
                    fontFamily: "'Fredoka', sans-serif",
                  }}
                >
                  YES, PICK THIS 💗
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}