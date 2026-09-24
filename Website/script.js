/**
 * Laphing Food Centre — Mobile-First Script
 * "Test of Himalayas" • Bhawanipur, Kolkata
 * Hours: Monday to Saturday, 2:00 PM – 8:00 PM (Closed Sunday)
 */

document.addEventListener('DOMContentLoaded', () => {
  initLiveHoursStatus();
  initHeroVideoOptimization();
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
 * Ensures video plays smoothly and handles battery-saver restrictions
 */
function initHeroVideoOptimization() {
  const video = document.querySelector('.hero-video');
  if (!video) return;

  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Autoplay blocked by device power saving mode; poster is shown automatically
    });
  }
  video.muted = true;
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
