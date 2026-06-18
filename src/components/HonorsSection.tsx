export default function HonorsSection() {
  return (
    <>
      <section className="honors-section py-5">
          <div className="container-fluid text-center">
              <div className="container-inner">

                  <h2 className="title-heading mb-4"> 
                      <span className="animate-word-grow text-white">Recognized.</span>
                      <span className="animate-word-grow text-white">Respected.</span> 
                      <span className="animate-word-grow text-white">Relentless.</span>
                  </h2>

                  <div className="custom-grid">

                      
                      <div className="award-card">
                          <div className="award-logo">
                              <img width={189} height={62} src="/assets/upwork.webp" className="award-logo wp-post-image" alt="Upwork" decoding="async" />                    </div>
                      </div>

                      
                      <div className="award-card">
                          <div className="award-logo">
                              <img width={1226} height={1050} src="/assets/clutch.webp" className="award-logo wp-post-image" alt="Clutch" decoding="async" fetchPriority="high" />                    </div>
                      </div>

                      
                      <div className="award-card">
                          <div className="award-logo">
                              <img width={214} height={32} src="/assets/enterpriseWorld.webp" className="award-logo wp-post-image" alt="The Enterprise World" decoding="async" />                    </div>
                      </div>

                      
                      <div className="award-card">
                          <div className="award-logo">
                              <img width={194} height={36} src="/assets/siliconIndia.webp" className="award-logo wp-post-image" alt="SiliconIndia" decoding="async" />                    </div>
                      </div>

                      
                      <div className="award-card">
                          <div className="award-logo">
                              <img width={194} height={36} src="/assets/techreviewer.webp" className="award-logo wp-post-image" alt="Techreviewer" decoding="async" />                    </div>
                      </div>

                      
                  </div>

              </div>
          </div>
      </section>
    </>
  );
}
