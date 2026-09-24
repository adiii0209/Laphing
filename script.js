/**
 * Laphing Food Centre — Mobile-First Script
 * "Taste of Himalayas" • Bhawanipur, Kolkata
 * Hours: Monday to Saturday, 2:00 PM – 8:00 PM (Closed Sunday)
 */

document.addEventListener('DOMContentLoaded', () => {
  initLiveHoursStatus();
  initHeroVideoOptimization();
  initInstaReelPlayers();
  initSmoothScroll();
});

/**
 * Calculates current live open/close status based on IST (UTC+5:30)
 * Operating Hours: Monday to Saturday, 2:00 PM – 8:00 PM. Sunday: Closed.
 */
function initLiveHoursStatus() {
  const badge = document.getElementById('livePill');
  const text = document.getElementById('statusText');
  if (!badge || !text) return;

  const dot = badge.querySelector('.status-dot');

  function updateStatus() {
    const now = new Date();
    // Convert current time to IST (UTC + 5:30)
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const istTime = new Date(utc + (3600000 * 5.5));

    const day = istTime.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hours = istTime.getHours();
    const minutes = istTime.getMinutes();
    const currentTimeVal = hours + minutes / 60;

    // 2:00 PM (14:00) to 8:00 PM (20:00), Monday to Saturday
    const isSunday = (day === 0);
    const isOpen = !isSunday && (currentTimeVal >= 14 && currentTimeVal < 20);

    if (isOpen) {
      if (dot) dot.className = 'status-dot';
      text.textContent = 'Open (Till 8 PM)';
      badge.setAttribute('title', 'Stall is currently open in Bhawanipur!');
    } else {
      if (dot) dot.className = 'status-dot closed';
      if (isSunday) {
        text.textContent = 'Closed (Sunday)';
      } else if (currentTimeVal < 14) {
        text.textContent = 'Opens 2 PM';
      } else {
        text.textContent = 'Closed (Opens 2 PM)';
      }
      badge.setAttribute('title', 'Stall is closed. Timings: 2 PM – 8 PM (Mon–Sat)');
    }
  }

  updateStatus();
  setInterval(updateStatus, 60000);
}

/**
 * Ensures hero video plays smoothly
 */
function initHeroVideoOptimization() {
  const video = document.querySelector('.hero-video');
  if (!video) return;

  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {});
  }
  video.muted = true;
}

/**
 * Full Instagram Video Player Controller
 * - Autoplay muted when scrolled into viewport
 * - Tap anywhere on video to play / pause with pop animation
 * - Unmute / mute button with auto-muting other clips
 * - Scrubbing progress bar
 */
function initInstaReelPlayers() {
  const cards = document.querySelectorAll('.insta-reel-card');
  if (!cards.length) return;

  const allPlayers = [];

  cards.forEach(card => {
    const video = card.querySelector('.insta-reel-video');
    const tapZone = card.querySelector('.insta-tap-zone');
    const popIcon = card.querySelector('.insta-pop-icon');
    const muteBtn = card.querySelector('.insta-mute-btn');
    const progressFill = card.querySelector('.insta-progress-fill');

    if (!video) return;
    allPlayers.push({ video, muteBtn, card });

    // Ensure muted start for policy compliance
    video.muted = true;

    // Real-time progress bar tracking
    video.addEventListener('timeupdate', () => {
      if (video.duration && progressFill) {
        const pct = (video.currentTime / video.duration) * 100;
        progressFill.style.width = pct + '%';
      }
    });

    // Tap to Pause / Play
    if (tapZone) {
      tapZone.addEventListener('click', (e) => {
        e.stopPropagation();
        if (video.paused) {
          video.play().then(() => {
            card.classList.remove('is-paused');
            showFeedback('show-play');
          }).catch(() => {});
        } else {
          video.pause();
          card.classList.add('is-paused');
          showFeedback('show-pause');
        }
      });
    }

    function showFeedback(cls) {
      if (!popIcon) return;
      popIcon.classList.remove('show-play', 'show-pause');
      void popIcon.offsetWidth; // trigger reflow
      popIcon.classList.add(cls);
      setTimeout(() => {
        popIcon.classList.remove(cls);
      }, 550);
    }

    // Mute / Unmute Button
    if (muteBtn) {
      muteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const currentlyMuted = video.muted;

        if (currentlyMuted) {
          // Unmute this video
          video.muted = false;
          muteBtn.classList.remove('is-muted');

          // Mute all other playing videos
          allPlayers.forEach(item => {
            if (item.video !== video) {
              item.video.muted = true;
              if (item.muteBtn) item.muteBtn.classList.add('is-muted');
            }
          });
        } else {
          // Mute this video
          video.muted = true;
          muteBtn.classList.add('is-muted');
        }
      });
    }
  });

  // IntersectionObserver to auto-play when in viewport and pause when scrolled away
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target.querySelector('.insta-reel-video');
        const card = entry.target;
        if (!video) return;

        if (entry.isIntersecting) {
          // Autoplay if not manually paused by user tap
          if (!card.classList.contains('is-paused')) {
            video.play().catch(() => {});
          }
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.35 });

    cards.forEach(card => observer.observe(card));
  }
}

/**
 * Smooth anchor scrolling with offset for the floating top bar
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerHeight = document.querySelector('.ios-top-bar')?.offsetHeight || 55;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10;

        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });
}
