// No.1 Club Landing Page Interactive Scripts

document.addEventListener('DOMContentLoaded', function() {
  // 1. Smooth Anchor Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 2. Interactive Course Category Filtering
  const filterPills = document.querySelectorAll('.course-filter-pill');
  const courseCards = document.querySelectorAll('.course-card-wrapper');
  
  if (filterPills.length && courseCards.length) {
    filterPills.forEach(pill => {
      pill.addEventListener('click', function() {
        filterPills.forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        const category = this.getAttribute('data-category');
        
        courseCards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          if (category === 'all' || cardCat === category || (cardCat && cardCat.includes(category))) {
            card.style.display = 'block';
            setTimeout(() => { card.style.opacity = '1'; }, 50);
          } else {
            card.style.opacity = '0';
            setTimeout(() => { card.style.display = 'none'; }, 200);
          }
        });
      });
    });
  }

  // 3. Pricing Toggle with Free Dhanam Magazine for Yearly Plan
  const toggleMonthly = document.getElementById('toggle-monthly');
  const toggleYearly = document.getElementById('toggle-yearly');
  
  const priceAmount = document.getElementById('pricing-amount');
  const pricePeriod = document.getElementById('pricing-period');
  const pricingBillingSub = document.getElementById('pricing-billing-sub');
  const strikePrice = document.getElementById('pricing-strike');
  const saveBadge = document.getElementById('pricing-save-badge');
  const dhanamPerkBox = document.getElementById('dhanam-annual-perk-box');
  const ctaBtn = document.getElementById('pricing-cta-btn');
  const dhanamFeature = document.getElementById('dhanam-pricing-feature');

  window.selectYearlyPricing = function() {
    setPricingMode('yearly');
    const pricingEl = document.getElementById('pricing');
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  function setPricingMode(mode) {
    if (mode === 'monthly') {
      if (toggleMonthly) toggleMonthly.classList.add('active');
      if (toggleYearly) toggleYearly.classList.remove('active');
      
      if (priceAmount) priceAmount.textContent = '₹ 899';
      if (pricePeriod) pricePeriod.textContent = '/ month';
      if (pricingBillingSub) pricingBillingSub.innerHTML = 'billed monthly · Cancel anytime';
      if (strikePrice) strikePrice.textContent = '₹ 1,499';
      if (saveBadge) {
        saveBadge.textContent = 'SAVE ₹ 600';
        saveBadge.style.background = '#e05555';
      }
      if (dhanamPerkBox) {
        dhanamPerkBox.style.display = 'none';
      }
      if (dhanamFeature) {
        dhanamFeature.style.display = 'none';
      }
      if (ctaBtn) {
        ctaBtn.innerHTML = 'Get Monthly Access — ₹899 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>';
      }
    } else {
      if (toggleYearly) toggleYearly.classList.add('active');
      if (toggleMonthly) toggleMonthly.classList.remove('active');
      
      if (priceAmount) priceAmount.textContent = '₹ 7,999';
      if (pricePeriod) pricePeriod.textContent = '/ per year';
      if (pricingBillingSub) pricingBillingSub.innerHTML = 'billed annually <span style="color:#cbd5e1; font-weight:normal;">(Just ₹666/month)</span>';
      if (strikePrice) strikePrice.textContent = '₹ 10,788';
      if (saveBadge) {
        saveBadge.textContent = 'SAVE 26% · BEST VALUE';
        saveBadge.style.background = '#059669';
      }
      if (dhanamPerkBox) {
        dhanamPerkBox.style.display = 'block';
      }
      if (dhanamFeature) {
        dhanamFeature.style.display = 'flex';
      }
      if (ctaBtn) {
        ctaBtn.innerHTML = 'Get Yearly Access — ₹7,999 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>';
      }
    }
  }

  if (toggleMonthly && toggleYearly) {
    toggleMonthly.addEventListener('click', () => setPricingMode('monthly'));
    toggleYearly.addEventListener('click', () => setPricingMode('yearly'));
  }
});
