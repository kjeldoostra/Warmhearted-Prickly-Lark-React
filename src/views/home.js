import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Warmhearted Prickly Lark</title>
        <meta property="og:title" content="Warmhearted Prickly Lark" />
      </Helmet>
      <div className="home-header"></div>
      <header data-thq="thq-navbar" className="home-navbar-interactive">
        <img
          alt="logo"
          src="https://app.grapify.co/assets/grapify-temp-logo.png"
          className="home-image"
        />
        <div data-thq="thq-navbar-nav" className="home-desktop-menu">
          <nav className="home-links"></nav>
          <div className="home-buttons">
            <button disabled className="button">
              Access Platform
            </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div className="home-nav">
            <div className="home-top">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home-logo"
              />
              <div data-thq="thq-close-menu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="home-links1">
              <span className="home-text">About</span>
              <span className="home-text01">Features</span>
              <span className="home-text02">Pricing</span>
              <span className="home-text03">Team</span>
              <span className="home-text04">Blog</span>
            </nav>
            <div className="home-buttons1">
              <button className="home-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-hero">
        <div className="heroContainer home-hero1">
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">
              AI-Powered Wine Recommender
            </h1>
            <span className="home-hero-sub-heading">
              For bars, restaurants, wine stores and webshops. 
            </span>
            <div className="home-btn-group">
              <button className="buttonFilled">Get Started</button>
              <button className="buttonFlat">Learn More →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="featuresContainer">
          <div className="home-features1">
            <div className="home-container02">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Our Key Features
              </h2>
            </div>
            <div className="home-container03">
              <FeatureCard
                Heading="Tailored to your wine selection"
                SubHeading="The AI sommelier will only recommend wines that you sell."
              ></FeatureCard>
              <FeatureCard
                Heading="Multilingual"
                SubHeading="The Grapify AI sommelier speaks 72+ languages!"
              ></FeatureCard>
              <FeatureCard
                Heading="Easy mobile interface"
                SubHeading="Guests can scan a QR code or interact with Grapify through your website or online menu."
              ></FeatureCard>
              <FeatureCard
                Heading="Insights into customer demand"
                SubHeading="You receive insights into what your customers are asking for, so you can optimize your wine stock as needed."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="pricingContainer">
          <div className="home-container04">
            <span className="overline">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="heading2">Choose Your Plan</h2>
            <span className="home-pricing-sub-heading bodyLarge">
              <span>
                <span>Select the perfect plan for your needs</span>
              </span>
            </span>
          </div>
          <div className="home-container05">
            <div className="freePricingCard home-pricing-card">
              <div className="home-container06">
                <span className="home-text13 heading3">FREE</span>
                <span className="bodySmall">
                  For evaluation and usage in small restaurants, bars and
                  stores.
                </span>
              </div>
              <div className="home-container07">
                <span className="home-free-plan-price">Free</span>
              </div>
              <div className="home-container08">
                <div className="home-container09">
                  <span className="home-text14">✔</span>
                  <span className="bodySmall">Up to 10 wines</span>
                </div>
                <div className="home-container10">
                  <span className="home-text15">✔</span>
                  <span className="bodySmall">150 requests per month</span>
                </div>
                <div className="home-container11">
                  <span className="home-text16">✔</span>
                  <span className="bodySmall">All languages</span>
                </div>
              </div>
              <button className="home-button buttonOutline">
                Continue with Free
              </button>
            </div>
            <div className="basicPricingCard home-pricing-card1">
              <div className="home-container12">
                <span className="home-text17 heading3">STANDARD</span>
                <span className="bodySmall">
                  For restaurants, bars and smaller wine stores.
                </span>
              </div>
              <div className="home-container13">
                <span className="home-text18">€</span>
                <span className="home-basic-plan-pricing">99</span>
                <span className="home-text19">/ month</span>
              </div>
              <div className="home-container14">
                <div className="home-container15">
                  <span className="home-text20">✔</span>
                  <span className="bodySmall">Up to 50 wines</span>
                </div>
                <div className="home-container16">
                  <span className="home-text22">✔</span>
                  <span className="bodySmall">1500 requests per month</span>
                </div>
                <div className="home-container17">
                  <span className="home-text23">✔</span>
                  <span className="bodySmall">All languages</span>
                </div>
                <div className="home-container18">
                  <span className="home-text24">✔</span>
                  <span className="bodySmall">Demand insights</span>
                </div>
              </div>
              <button className="home-button1 buttonFilledSecondary">
                Try the Standard plan
              </button>
            </div>
            <div className="proPricingCard home-pricing-card2">
              <div className="home-container19">
                <span className="home-text25 heading3">
                  <span>MAGNUM</span>
                  <br></br>
                </span>
                <span className="bodySmall">
                  For large wine stores and webshops.
                </span>
              </div>
              <div className="home-container20">
                <span className="home-pro-plan-pricing">Custom</span>
              </div>
              <div className="home-container21">
                <div className="home-container22">
                  <span className="home-text28">✔</span>
                  <span className="bodySmall">
                     All features of STANDARD plan
                  </span>
                </div>
                <div className="home-container23">
                  <span className="home-text30">✔</span>
                  <span>Up to unlimited wines</span>
                </div>
                <div className="home-container24">
                  <span className="home-text31">✔</span>
                  <span className="bodySmall">
                    PIM data integration available
                  </span>
                </div>
                <div className="home-container25">
                  <span className="home-text32">✔</span>
                  <span className="bodySmall">
                    Embedded solutions available
                  </span>
                </div>
              </div>
              <button className="home-button2 buttonFilledSecondary">
                Get in touch
              </button>
            </div>
          </div>
        </div>
        <div className="home-container26">
          <div className="home-container27"></div>
        </div>
      </div>
    </div>
  )
}

export default Home
