/**
 * ==========================================================================
 * CUSTOM.JS - Main JavaScript File
 * ==========================================================================
 */

/* Navbar Glass Effect on Scroll */
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (navbar && window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else if (navbar) {
        navbar.classList.remove('scrolled');
    }
});
/* End Navbar Glass Effect on Scroll */

/* Logo Slider: JS-driven seamless infinite scroll (no CSS animation jump) */
(function () {
    function initLogoSlider() {
        var track = document.querySelector('.logo-track');
        if (!track) return;

        var allItems = track.querySelectorAll('.logo-item');
        var totalCount = allItems.length;
        if (totalCount === 0) return;

        // PHP rendered 2 identical sets — original set = first half
        var setSize = Math.floor(totalCount / 2);
        var gap = parseFloat(getComputedStyle(track).gap) || 40;

        // Measure the pixel width of one original set
        var oneSetWidth = 0;
        for (var i = 0; i < setSize; i++) {
            oneSetWidth += allItems[i].offsetWidth + gap;
        }
        if (oneSetWidth === 0) return;

        // Clone more sets until the track spans at least 2× the viewport
        var needed = Math.ceil((window.innerWidth * 2) / oneSetWidth) + 1;
        var current = 2; // PHP already rendered 2 copies
        while (current < needed) {
            for (var j = 0; j < setSize; j++) {
                track.appendChild(allItems[j].cloneNode(true));
            }
            current++;
        }

        // Disable CSS animation — JS rAF loop takes over (no jump on reset)
        track.style.animation = 'none';

        var position = 0;
        var speed = oneSetWidth / 50; // px/sec — matches the original 50s CSS duration
        var lastTime = null;
        var paused = false;

        track.addEventListener('mouseenter', function () { paused = true; });
        track.addEventListener('mouseleave', function () { paused = false; lastTime = null; });

        function animate(timestamp) {
            if (!paused) {
                if (lastTime === null) lastTime = timestamp;
                var delta = timestamp - lastTime;
                lastTime = timestamp;

                position -= speed * (delta / 1000);

                // Wrap at exact set boundary — same content at 0 and -oneSetWidth, so invisible
                if (position <= -oneSetWidth) {
                    position += oneSetWidth;
                }

                track.style.transform = 'translateX(' + position + 'px)';
            } else {
                lastTime = null;
            }
            requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);
    }

    // Wait for images so offsetWidth measurements are accurate
    if (document.readyState === 'complete') {
        initLogoSlider();
    } else {
        window.addEventListener('load', initLogoSlider);
    }
})();



/*************Work Section*************** */

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/* ==========================================================================
    LENIS SMOOTH SCROLL & SCROLL CHAINING
   ========================================================================== */

// Scroll Chaining Logic: Allow main scroll when inner scroll hits boundaries
// Global flag for scroll prevention
let isInnerScrolling = false;
let isWorkSectionHovered = false;

window.addEventListener('wheel', (e) => {
    let target = e.target;
    let scrollable = null;

    // Find the nearest scrollable ancestor
    while (target && target !== document.body) {
        const style = window.getComputedStyle(target);
        const overflow = style.getPropertyValue('overflow-y');
        if (overflow === 'auto' || overflow === 'scroll') {
            if (target.scrollHeight > target.clientHeight) {
                scrollable = target;
                break;
            }
        }
        target = target.parentElement;
    }

    if (scrollable) {
        const { scrollTop, scrollHeight, clientHeight } = scrollable;
        const isAtTop = scrollTop <= 0;
        const isAtBottom = Math.abs(scrollTop + clientHeight - scrollHeight) < 1;
        
        const scrollingUp = e.deltaY < 0;
        const scrollingDown = e.deltaY > 0;

        // If trying to scroll past boundaries, allow Lenis (main scroll)
        if ((scrollingUp && isAtTop) || (scrollingDown && isAtBottom)) {
            isInnerScrolling = false;
        } else {
            isInnerScrolling = true;
        }
    } else {
        isInnerScrolling = false;
    }
}, { passive: true });

const lenis = new Lenis({
    duration: 2.2,
    lerp: 0.04,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    prevent: () => isInnerScrolling || isWorkSectionHovered
});

window.siteLenis = lenis;

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

function setupWorkScrollSection(section) {
    if (section.dataset.workStackInit === '1') {
        return section._workStackCleanup || (() => {});
    }

    const wrapper = section.querySelector(".scroll_wrapper");
    if (!wrapper) return () => {};

    const items = Array.from(wrapper.querySelectorAll(".card_stack_item"));
    const dots = Array.from(section.querySelectorAll(".card-stack-dot"));
    if (!items.length) return () => {};

    section.dataset.workStackInit = '1';

    let currentIndex = 0;
    let isAnimating = false;
    let isMouseOver = false;

    let lastWheelTime = 0;
    let slideTriggeredInGesture = false;
    const NEW_GESTURE_THRESHOLD = 30;

    items.forEach((item, index) => {
        gsap.set(item, {
            opacity: 1,
            scale: 1,
            zIndex: index + 1,
            yPercent: index === 0 ? 0 : 125,
            borderRadius: "0px",
            filter: "blur(0px)"
        });
    });

    dots.forEach((dot, index) => dot.classList.toggle("active", index === 0));

    const goToSlide = (index) => {
        if (index < 0 || index >= items.length || isAnimating || index === currentIndex) return;

        isAnimating = true;
        const isGoingDown = index > currentIndex;

        const tl = gsap.timeline({
            onComplete: () => {
                currentIndex = index;
                isAnimating = false;
            }
        });

        items.forEach((item, i) => {
            if (i < index && i !== currentIndex) {
                gsap.set(item, { yPercent: 0, scale: 0.4, opacity: 0, borderRadius: "10px" });
            } else if (i > index && i !== currentIndex) {
                gsap.set(item, { yPercent: 125, scale: 1, opacity: 1, borderRadius: "0px" });
            }
        });

        if (isGoingDown) {
            tl.to(items[currentIndex], {
                scale: 0.4,
                opacity: 0,
                borderRadius: "10px",
                duration: 0.75,
                ease: "power2.inOut"
            });
            tl.to(items[index], {
                yPercent: 0,
                scale: 1,
                opacity: 1,
                borderRadius: "0px",
                duration: 0.75,
                ease: "power2.out"
            }, "<");
        } else {
            tl.to(items[currentIndex], {
                yPercent: 125,
                scale: 1,
                opacity: 1,
                borderRadius: "0px",
                duration: 0.75,
                ease: "power2.inOut"
            });
            tl.to(items[index], {
                scale: 1,
                opacity: 1,
                borderRadius: "0px",
                yPercent: 0,
                duration: 0.75,
                ease: "power2.out"
            }, "<");
        }

        dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
    };

    const isInActiveZone = (buffer = 0) => {
        const rect = section.getBoundingClientRect();
        const threshold = window.innerHeight * 0.5;
        return rect.top <= threshold + buffer && rect.bottom >= threshold - buffer;
    };

    const scrollTrigger = ScrollTrigger.create({
        trigger: section,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => { if (isMouseOver) isWorkSectionHovered = true; },
        onLeave: () => { isWorkSectionHovered = false; },
        onEnterBack: () => { if (isMouseOver) isWorkSectionHovered = true; },
        onLeaveBack: () => { isWorkSectionHovered = false; }
    });

    const onWheelCapture = (e) => {
        if (!isMouseOver || !isInActiveZone(20)) return;

        const isDown = e.deltaY > 0;
        const atEnd = isDown && currentIndex >= items.length - 1;
        const atStart = !isDown && currentIndex <= 0;

        isWorkSectionHovered = !(atEnd || atStart);
    };
    document.addEventListener('wheel', onWheelCapture, { capture: true, passive: true });

    const onWheel = (e) => {
        const now = Date.now();
        const isDown = e.deltaY > 0;
        const active = isInActiveZone(20);
        const elapsed = now - lastWheelTime;
        lastWheelTime = now;

        if (elapsed >= NEW_GESTURE_THRESHOLD) {
            slideTriggeredInGesture = false;
        }

        if (!isMouseOver || !active) {
            isWorkSectionHovered = false;
            return;
        }

        if (isAnimating) {
            e.preventDefault();
            return;
        }

        if (slideTriggeredInGesture) {
            e.preventDefault();
            return;
        }

        if (isDown) {
            if (currentIndex < items.length - 1) {
                isWorkSectionHovered = true;
                e.preventDefault();
                slideTriggeredInGesture = true;
                goToSlide(currentIndex + 1);
            } else {
                isWorkSectionHovered = false;
            }
        } else {
            if (currentIndex > 0) {
                isWorkSectionHovered = true;
                e.preventDefault();
                slideTriggeredInGesture = true;
                goToSlide(currentIndex - 1);
            } else {
                isWorkSectionHovered = false;
            }
        }
    };

    const onMouseEnter = () => {
        isMouseOver = true;
        if (isInActiveZone()) {
            isWorkSectionHovered = true;
        }
    };
    const onMouseLeave = () => {
        isMouseOver = false;
        isWorkSectionHovered = false;
    };
    const onMouseMove = () => {
        isMouseOver = true;
        if (isInActiveZone()) {
            isWorkSectionHovered = true;
        }
    };

    wrapper.addEventListener('mouseenter', onMouseEnter);
    wrapper.addEventListener('mouseleave', onMouseLeave);
    wrapper.addEventListener('wheel', onWheel, { passive: false });
    wrapper.addEventListener('mousemove', onMouseMove);

    const dotHandlers = dots.map((dot) => {
        const onClick = () => {
            const slideIndex = parseInt(dot.getAttribute("data-slide"), 10);
            if (!Number.isNaN(slideIndex)) {
                goToSlide(slideIndex);
            }
        };
        dot.addEventListener("click", onClick);
        return () => dot.removeEventListener("click", onClick);
    });

    const cleanup = () => {
        document.removeEventListener('wheel', onWheelCapture, { capture: true });
        wrapper.removeEventListener('mouseenter', onMouseEnter);
        wrapper.removeEventListener('mouseleave', onMouseLeave);
        wrapper.removeEventListener('wheel', onWheel);
        wrapper.removeEventListener('mousemove', onMouseMove);
        dotHandlers.forEach((removeHandler) => removeHandler());
        scrollTrigger.kill();
        delete section.dataset.workStackInit;
        delete section._workStackCleanup;
        isWorkSectionHovered = false;
    };

    section._workStackCleanup = cleanup;
    return cleanup;
}

function initWorkScrollSections(root = document) {
    if (window.innerWidth < 992) {
        return () => {};
    }

    const scope = root && root.querySelectorAll ? root : document;
    const sections = scope.querySelectorAll
        ? scope.querySelectorAll(".scroll-section")
        : document.querySelectorAll(".scroll-section");

    const cleanups = [];
    sections.forEach((section) => {
        const cleanup = setupWorkScrollSection(section);
        if (typeof cleanup === 'function') {
            cleanups.push(cleanup);
        }
    });

    return () => {
        cleanups.forEach((cleanup) => cleanup());
    };
}

function destroyWorkScrollSections(root = document) {
    const scope = root && root.querySelectorAll ? root : document;
    const sections = scope.querySelectorAll
        ? scope.querySelectorAll(".scroll-section")
        : document.querySelectorAll(".scroll-section");

    sections.forEach((section) => {
        if (typeof section._workStackCleanup === 'function') {
            section._workStackCleanup();
        }
    });
}

window.techfyteInitWorkSections = initWorkScrollSections;
window.techfyteDestroyWorkSections = destroyWorkScrollSections;

const mm = gsap.matchMedia();
mm.add("(min-width: 992px)", () => {
    const cleanup = initWorkScrollSections();
    return () => cleanup();
});

/* ==========================================================================
    METRICS COUNTER ANIMATION
   ========================================================================== */

const counters = document.querySelectorAll('.counter');

if (counters.length > 0) {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        
        gsap.to(counter, {
            scrollTrigger: {
                trigger: '#metrics-section',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            innerText: target,
            duration: 2,
            snap: { innerText: 1 },
            ease: 'power1.out',
            onUpdate: function() {
                // Formatting if needed, currently just simple number
            }
        });
    });
}



/* ==========================================================================
   8. TEXT ANIMATION - SPLITTEXT + GSAP
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function () {

    // Apply text animation only on desktop (992px and above)
    if (window.innerWidth >= 992) {
        // Loop through each text-anim element
        gsap.utils.toArray(".text-anim").forEach((element) => {
            
            // Initialize SplitText for each element
            let splitText = new SplitText(element, {
                type: "lines",
                linesClass: "line",
                mask: "lines",
                // tag: "span"
            });

            // Animate lines into view
            gsap.from(splitText.lines, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });
        });
    }



    // Word grow animation - trigger on scroll (Desktop Only)
    const wordGrowElements = document.querySelectorAll(".animate-word-grow");
    if (wordGrowElements.length > 0) {
        let mm = gsap.matchMedia();
        
        mm.add("(min-width: 992px)", () => {
            ScrollTrigger.create({
                trigger: wordGrowElements[0].closest("section") || wordGrowElements[0].parentElement,
                start: "top 80%",
                onEnter: () => {
                    wordGrowElements.forEach((el) => {
                        el.classList.add("active");
                    });
                }
            });

            return () => {
                wordGrowElements.forEach((el) => {
                    el.classList.remove("active");
                });
            };
        });
    }

    /* ==========================================================================
       SUCCESS SECTION SCALE ANIMATION
       ========================================================================== */
    const successSections = gsap.utils.toArray('.success-section');
    
    if (successSections.length) {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 992px)", () => {
            successSections.forEach((successSection) => {
                gsap.set(successSection, { 
                    scale: 0.7,
                    force3D: true 
                });
                
                gsap.to(successSection, {
                    scale: 1,
                    force3D: true,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: successSection,
                        start: "top 80%",
                        end: "top 30%",
                        scrub: 1,
                    }
                });
            });

            return () => {
                successSections.forEach((successSection) => {
                    gsap.set(successSection, { scale: 1, clearProps: "all" });
                });
            };
        });
    }

    /* ==========================================================================
       INTL-TEL-INPUT INITIALIZATION
       ========================================================================== */
    function techfyteInitIntlTelInput() {
        const phoneInputs = document.querySelectorAll('input[type="tel"]');
        if (!window.intlTelInput || !phoneInputs.length) {
            return;
        }

        phoneInputs.forEach(input => {
            if (input.dataset.intlTelInitialized === "1") {
                return;
            }
            input.dataset.intlTelInitialized = "1";

            // Store instance for reuse (contact form submit uses this).
            input._techfyteIti = window.intlTelInput(input, {
                initialCountry: "in",
                separateDialCode: true,
                nationalMode: false,
                preferredCountries: ["in", "us", "gb", "ae"],
                loadUtilsOnInit: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/js/utils.js",
            });
        });
    }

    window.techfyteInitIntlTelInput = techfyteInitIntlTelInput;

    if (window.intlTelInput) {
        techfyteInitIntlTelInput();
    }

});

/* ==========================================================================
   CONTACT PAGE OFFICE LOCATION SWITCHER
   ========================================================================== */
 
// Office location switcher
document.querySelectorAll('.tech-icons span').forEach(function (icon) {
    icon.addEventListener('click', function () {
        // Update active state
        document.querySelectorAll('.tech-icons span').forEach(function (s) {
            s.classList.remove('active');
        });
        this.classList.add('active');

        // Update city name and address
        document.getElementById('officeCityName').textContent = this.dataset.city;
        document.getElementById('officeAddress').innerHTML = this.dataset.address;

        // Update map
        document.getElementById('officeMap').src = this.dataset.map;
    });
});

/* ==========================================================================
   EVOLUTION TIMELINE - Interactive Year Dot Navigation
   Handles dot clicks, year panel crossfade, progress line, and content swap
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

    /* --- Cache all timeline DOM elements --- */
    const timelineDots = document.querySelectorAll('.evolution-dot');
    const yearPanels = document.querySelectorAll('.year-panel');
    const contentPanels = document.querySelectorAll('.evolution-content');
    const lineFill = document.querySelector('.evolution-line-fill');

    /* Early exit if timeline section doesn't exist on this page */
    if (timelineDots.length === 0) return;

    /* --- Current state tracking --- */
    let currentYear = '2025';
    let isAnimating = false;

    /**
     * Switch the timeline to a specific year
     * Handles: dot states, progress line, year display, content panels
     * @param {string} targetYear - The year to switch to (e.g. "2023")
     */
    function switchToYear(targetYear) {
        /* Prevent rapid clicking during animation */
        if (isAnimating || targetYear === currentYear) return;
        isAnimating = true;

        /* Find the index of the target dot for progress calculation */
        const dotsArray = Array.from(timelineDots);
        const targetIndex = dotsArray.findIndex(dot => dot.dataset.year === targetYear);

        /* --- Update dot states (active, passed, default) --- */
        dotsArray.forEach((dot, index) => {
            dot.classList.remove('active', 'passed');
            if (index < targetIndex) {
                /* Dots before the active one are "passed" */
                dot.classList.add('passed');
            } else if (index === targetIndex) {
                /* The clicked dot becomes active */
                dot.classList.add('active');
            }
        });

        /* --- Animate the progress fill line to the active dot position --- */
        if (lineFill) {
            /* Calculate fill percentage based on dot position */
            const fillPercent = (targetIndex / (dotsArray.length - 1)) * 100;
            lineFill.style.width = fillPercent + '%';
        }

        /* --- Crossfade year panels (large "2025" display) --- */
        yearPanels.forEach(panel => {
            if (panel.dataset.year === targetYear) {
                /* Fade in the new year panel */
                panel.classList.add('active');
            } else {
                /* Fade out all other panels */
                panel.classList.remove('active');
            }
        });

        /* --- Switch content panels with animation --- */
        contentPanels.forEach(content => {
            if (content.dataset.year === targetYear) {
                /* Show the matching content with a slight delay for staggered feel */
                setTimeout(() => {
                    content.classList.add('active');
                }, 200);
            } else {
                content.classList.remove('active');
            }
        });

        /* Update state and unlock after animation completes */
        currentYear = targetYear;
        setTimeout(() => {
            isAnimating = false;
        }, 600);
    }

    /* --- Attach click handlers to each timeline dot --- */
    timelineDots.forEach(dot => {
        dot.addEventListener('click', function () {
            switchToYear(this.dataset.year);
        });
    });

    /* --- Initialize the first dot as active on page load --- */
    switchToYear('2025');
});



/* ==========================================================================
   WEB3 APPROACH SCROLL ANIMATION
   ========================================================================== */
function initWeb3ApproachAnimation() {
    const wrap = document.querySelector('.w3a-wrap');
    const spineFill = document.querySelector('.w3a-spine-fill');
    const rows = document.querySelectorAll('.w3a-row');

    if (!wrap || !spineFill || typeof gsap === 'undefined') return;

    // Create main layout timeline
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: wrap,
            start: "top 70%", // Start when top of section hits 70% of viewport
            end: "bottom 80%", // End before it leaves
            scrub: true, // Smoother scrub linked to scroll
        }
    });

    // 1. Animate spine from top to bottom
    tl.to(spineFill, {
        scaleY: 1,
        ease: "none",
        duration: 1
    }, 0);

    // 2. Animate all horizontal lines in a row (left & right) as the spine reaches it
    rows.forEach((row, index) => {
        const hLineFills = row.querySelectorAll('.w3a-hline-fill');
        const cards = row.querySelectorAll('.w3a-card');
        
        if (hLineFills.length > 0) {
            // Calculate relative offset of the row within the wrap
            const rowTop = row.offsetTop;
            const wrapHeight = wrap.offsetHeight;
            const startTime = rowTop / wrapHeight;

            // Animate lines
            tl.to(hLineFills, {
                scaleX: 1,
                ease: "power1.inOut",
                duration: 0.15
            }, startTime);

            // Animate card borders concurrently or with slight lag
            tl.to(cards, {
                borderColor: "#ebd6ff", // Brand primary color
                duration: 0.2,
                ease: "power1.inOut"
            }, startTime + 0.1); 
        }
    });

}


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWeb3ApproachAnimation);
} else {
    initWeb3ApproachAnimation();
}

/* --- Industry Nav: arrow scroll + click-to-center active tab --- */

(function () {
    function initIndustryNav() {
        var scroll   = document.getElementById('industryNavScroll');
        var btnPrev  = document.getElementById('industryNavPrev');
        var btnNext  = document.getElementById('industryNavNext');
        if (!scroll || !btnPrev || !btnNext) return;

        var step = 220;

        /* Update arrow visibility based on current scroll position */
        function updateArrows() {
            var atStart   = scroll.scrollLeft <= 4;
            var atEnd     = scroll.scrollLeft + scroll.clientWidth >= scroll.scrollWidth - 4;
            var canScroll = scroll.scrollWidth > scroll.clientWidth;
            btnPrev.classList.toggle('industry-nav-arrow--hidden', atStart || !canScroll);
            btnNext.classList.toggle('industry-nav-arrow--hidden', atEnd   || !canScroll);
        }

        /* Scroll a button element so it is centered inside the scroll container */
        function scrollTabIntoCenter(btn) {
            var btnLeft  = btn.offsetLeft;
            var btnWidth = btn.offsetWidth;
            var containerWidth = scroll.clientWidth;
            var targetScrollLeft = btnLeft - (containerWidth / 2) + (btnWidth / 2);
            scroll.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
        }

        /* Arrow button clicks */
        btnPrev.addEventListener('click', function () {
            scroll.scrollBy({ left: -step, behavior: 'smooth' });
        });
        btnNext.addEventListener('click', function () {
            scroll.scrollBy({ left: step, behavior: 'smooth' });
        });

        /* When any nav tab is clicked, center it in the scroll area */
        var navButtons = scroll.querySelectorAll('.industry-nav .nav-link');
        navButtons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                scrollTabIntoCenter(this);
            });
        });

        scroll.addEventListener('scroll', updateArrows, { passive: true });
        window.addEventListener('resize', updateArrows);
        updateArrows();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initIndustryNav);
    } else {
        initIndustryNav();
    }
})();

/* ==========================================================================
   MEGA MENU TAB SWITCHING — hover on desktop, click on mobile
   ========================================================================== */
(function () {
    function initMegaMenuTabs() {
        var tabItems = document.querySelectorAll('.mega-left-nav li[data-tab]');
        if (!tabItems.length) return;

        var mobileBreakpoint = 1200;

        // Prevent clicks inside mega-panel from closing the Bootstrap dropdown
        document.querySelectorAll('.mega-panel').forEach(function (panel) {
            panel.addEventListener('click', function (e) {
                e.stopPropagation();
            });
        });

        function switchTab(tab) {
            var panel = tab.closest('.mega-panel');
            if (!panel) return;

            var tabId = tab.getAttribute('data-tab');

            // Update active state on left nav
            panel.querySelectorAll('.mega-left-nav li').forEach(function (li) {
                li.classList.remove('active');
            });
            tab.classList.add('active');

            // Show matching right content
            panel.querySelectorAll('.mega-right-content').forEach(function (content) {
                if (content.getAttribute('data-content') === tabId) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        }

        tabItems.forEach(function (tab) {
            // Desktop: hover
            tab.addEventListener('mouseenter', function () {
                if (window.innerWidth >= mobileBreakpoint) {
                    switchTab(this);
                }
            });

            // Mobile: click/tap
            tab.addEventListener('click', function (e) {
                if (window.innerWidth < mobileBreakpoint) {
                    e.preventDefault();
                    e.stopPropagation();
                    switchTab(this);
                }
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMegaMenuTabs);
    } else {
        initMegaMenuTabs();
    }
})();

/* ==========================================================================
   MOBILE SIDEBAR - Open / Close / Accordion (reuses #navbarMega)
   ========================================================================== */
(function () {
    function initMobileSidebar() {
        var navbar = document.getElementById('mainNav');
        var collapse = document.getElementById('navbarMega');
        var openBtn = document.getElementById('mobileSidebarToggle');
        var closeBtn = document.getElementById('mobileSidebarClose');

        if (!navbar || !collapse || !openBtn) return;

        var mobileBreakpoint = 1200;

        function isMobile() {
            return window.innerWidth < mobileBreakpoint;
        }

        function openSidebar() {
            if (!isMobile()) return;
            collapse.classList.add('show', 'sidebar-active');
            navbar.classList.add('sidebar-open');
            document.body.classList.add('sidebar-open');
        }

        function closeSidebar() {
            collapse.classList.remove('show', 'sidebar-active');
            navbar.classList.remove('sidebar-open');
            document.body.classList.remove('sidebar-open');
        }

        openBtn.addEventListener('click', function (e) {
            console.log('toggle clicked');
            if (!isMobile()) return;
            e.preventDefault();
            e.stopPropagation();

            if (collapse.classList.contains('sidebar-active')) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', function (e) {
                if (!isMobile()) return;
                e.preventDefault();
                e.stopPropagation();
                closeSidebar();
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileSidebar);
    } else {
        initMobileSidebar();
    }
})();