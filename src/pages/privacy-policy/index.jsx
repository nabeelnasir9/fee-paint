import { Layout } from "../../components";
import Grid from "@mui/material/Grid";
import "./index.css";
import { Link } from "react-router-dom";
const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="pages-data-container">
        <Grid container spacing={0}>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
          <Grid xs={10} sm={10} md={10} lg={10} xl={8}>
            <h1 className="privacy-policy-heading">Privacy Policy</h1>
            <p className="privacy-policy-text">
              This Privacy Policy describes how info@mypaintgenie.com (the
              “Site” or “we”) collects, uses, and discloses your Personal
              Information when you visit or make a purchase from the Site.
            </p>
            <p className="privacy-policy-title">Contact</p>
            <p className="privacy-policy-text">
              After reviewing this policy, if you have additional questions,
              want more information about our privacy practices, or would like
              to make a complaint, please contact us by e-mail at
              info@mypaintgenie.com
            </p>
            <p className="privacy-policy-title">
              Collecting Personal Information
            </p>
            <p className="privacy-policy-text">
              When you visit the Site, we collect certain information about your
              device, your interaction with the Site, and the information
              necessary to process your purchases. We may also collect
              additional information if you contact us for customer support. In
              this Privacy Policy, we refer to any information about an
              identifiable individual (including the information below) as
              “Personal Information". See the list below for more information
              about what Personal Information we collect and why.
            </p>
            <p className="privacy-policy-title">Device information</p>
            <ul className="privacy-policy-list">
              <li>
                <span> Purpose of collection:</span> to load the Site accurately
                for you, and to perform analytics on Site usage to optimize our
                Site.
              </li>
              <li>
                <span>Source of collection:</span> Collected automatically when
                you access our Site using cookies, log files, web beacons, tags,
                or pixels.
              </li>
              <li>
                <span>Disclosure for a business purpose:</span> shared with our
                processor Shopify.
              </li>
              <li>
                <span>Personal Information collected:</span>version of web
                browser, IP address, time zone, cookie information, what sites
                or products you view, search terms, and how you interact with
                the Site.
              </li>
            </ul>
            <p className="privacy-policy-title">Order information</p>
            <ul className="privacy-policy-list">
              <li>
                <span>Purpose of collection:</span> to provide products or
                services to you to fulfill our contract, to process your payment
                information, arrange for shipping, and provide you with invoices
                and/or order confirmations, communicate with you, screen our
                orders for potential risk or fraud, and when in line with the
                preferences you have shared with us, provide you with
                information or advertising relating to our products or services.
              </li>
              <li>
                <span>Source of collection:</span> collected from you.
              </li>
              <li>
                <span>Disclosure for a business purpose:</span> shared with our
                processor Shopify.
              </li>
              <li>
                <span>Personal Information collected:</span> Name, billing
                address, shipping address, payment information (including credit
                card numbers, email address, and phone number.
              </li>
            </ul>
            <p className="privacy-policy-title">Customer support information</p>
            <ul className="privacy-policy-list">
              <li>
                <span>Purpose of collection:</span> To provide customer support
              </li>
              <li>
                <span>Source of collection:</span> Collected from you.
              </li>
            </ul>
            <p className="privacy-policy-title">Minors</p>
            <p className="privacy-policy-text">
              The Site is not intended for individuals under the age of 18. We
              do not intentionally collect Personal Information from children.
              If you are the parent or guardian and believe your child has
              provided us with Personal Information, please contact us at the
              address above to request deletion.
            </p>
            <p className="privacy-policy-title">Sharing Personal Information</p>
            <p className="privacy-policy-text">
              We share your Personal Information with service providers to help
              us provide our services and fulfill our contracts with you, as
              described above. For example:
            </p>
            <ul className="privacy-policy-list">
              {/* <li> */}
              {/*   We use Shopify to power our online store. You can read more */}
              {/*   about how Shopify uses your Personal Information here: */}
              {/*   <Link */}
              {/*     to="https://www.shopify.com/legal/privacy" */}
              {/*     target="_blank" */}
              {/*     className="linking" */}
              {/*   > */}
              {/*     https://www.shopify.com/legal/privacy */}
              {/*   </Link> */}
              {/*   . */}
              {/* </li> */}
              <li>
                We may share your Personal Information to comply with applicable
                laws and regulations, to respond to a subpoena, search warrant
                or other lawful request for information we receive, or to
                otherwise protect our rights.
                <br />
                Behavioural Advertising
                <br />
                As described above, we use your Personal Information to provide
                you with targeted advertisements or marketing communications we
                believe may be of interest to you. For example:
              </li>
              <li>
                We use Google Analytics to help us understand how our customers
                use the Site. You can read more about how Google uses your
                Personal Information here:
                <Link
                  to="https://www.google.com/intl/en/policies/privacy/"
                  target="_blank"
                  className="linking"
                >
                  https://www.google.com/intl/en/policies/privacy/
                </Link>
                . You can also opt-out of Google Analytics here:
                <Link
                  to="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  className="linking"
                >
                  https://tools.google.com/dlpage/gaoptout
                </Link>
                .
              </li>
              <li>
                We share information about your use of the Site, your purchases,
                and your interaction with our ads on other websites with our
                advertising partners. We collect and share some of this
                information directly with our advertising partners, and in some
                cases through the use of cookies or other similar technologies
                (which you may consent to, depending on your location).
              </li>
              <li>
                <br />
                For more information about how targeted advertising works, you
                can visit the Network Advertising Initiative’s (“NAI”)
                educational page at
                <Link
                  to="https://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"
                  target="_blank"
                  className="linking"
                >
                  https://www.networkadvertising.org/understanding-online-advertising/how-does-it-work
                </Link>
                .
                <br />
                You can opt out of targeted advertising by:
              </li>
              <li>
                FACEBOOK -
                <Link
                  to="https://www.facebook.com/settings/?tab=ads"
                  target="_blank"
                  className="linking"
                >
                  https://www.facebook.com/settings/?tab=ads
                </Link>
              </li>
              <li>
                GOOGLE -
                <Link
                  to="https://www.google.com/settings/ads/anonymous"
                  target="_blank"
                  className="linking"
                >
                  https://www.google.com/settings/ads/anonymous
                </Link>
              </li>
              <li>
                BING -
                <Link
                  to="https://about.ads.microsoft.com/en-us/resources/policies/personalized-ads"
                  target="_blank"
                  className="linking"
                >
                  https://about.ads.microsoft.com/en-us/resources/policies/personalized-ads
                </Link>
                <br />
                Additionally, you can opt out of some of these services by
                visiting the Digital Advertising Alliance’s opt-out portal at:
                <Link
                  to="https://optout.aboutads.info/"
                  target="_blank"
                  className="linking"
                >
                  https://optout.aboutads.info/
                </Link>
                .
              </li>
            </ul>
            <p className="privacy-policy-title">Using Personal Information</p>
            <p className="privacy-policy-text">
              We use your personal Information to provide our services to you,
              which includes: offering products for sale, processing payments,
              shipping and fulfillment of your order, and keeping you up to date
              on new products, services, and offers.
            </p>
            <p className="privacy-policy-title">Lawful basis</p>
            <p className="privacy-policy-text">
              Pursuant to the General Data Protection Regulation (“GDPR”), if
              you are a resident of the European Economic Area (“EEA”), we
              process your personal information under the following lawful
              bases:
            </p>
            <ul className="privacy-policy-list">
              <li>Your consent;</li>
              <li>The performance of the contract between you and the Site;</li>
              <li>Compliance with our legal obligations;</li>
              <li>To protect your vital interests;</li>
              <li>To perform a task carried out in the public interest;</li>
              <li>
                For our legitimate interests, which do not override your
                fundamental rights and freedoms.
              </li>
            </ul>

            <p className="privacy-policy-title">Retention </p>
            <p className="privacy-policy-text">
              When you place an order through the Site, we will retain your
              Personal Information for our records unless and until you ask us
              to erase this information. For more information on your right of
              erasure, please see the ‘Your rights’ section below.
            </p>
            <p className="privacy-policy-title">Automatic decision-making</p>
            <p className="privacy-policy-text">
              If you are a resident of the EEA, you have the right to object to
              processing based solely on automated decision-making (which
              includes profiling), when that decision-making has a legal effect
              on you or otherwise significantly affects you.
            </p>
            <p className="privacy-policy-text">
              We engage in fully automated decision-making that has a legal or
              otherwise significant effect using customer data.
            </p>
            <p className="privacy-policy-text">
              Our processor Shopify uses limited automated decision-making to
              prevent fraud that does not have a legal or otherwise significant
              effect on you.
            </p>
            <p className="privacy-policy-text">
              Services that include elements of automated decision-making
              include:
            </p>
            <ul className="privacy-policy-list">
              <li>
                Temporary blacklist of IP addresses associated with repeated
                failed transactions. This blacklist persists for a small number
                of hours.
              </li>
              <li>
                Temporary blacklist of credit cards associated with blacklisted
                IP addresses. This blacklist persists for a small number of
                days.
              </li>
            </ul>
            <p className="privacy-policy-heading">Your rights</p>
            <p className="privacy-policy-title">GDPR</p>
            <p className="privacy-policy-text">
              If you are a resident of the EEA, you have the right to access the
              Personal Information we hold about you, to port it to a new
              service, and to ask that your Personal Information be corrected,
              updated, or erased. If you would like to exercise these rights,
              please contact us through the contact information above.
            </p>
            <p className="privacy-policy-text">
              Your Personal Information will be initially processed in Ireland
              and then will be transferred outside of Europe for storage and
              further processing, including to Canada and the United States. For
              more information on how data transfers comply with the GDPR, see
              Shopify’s GDPR Whitepaper:
              <Link
                to=" https://help.shopify.com/en/manual/your-account/privacy/GDPR"
                target="_blank"
                className="linking"
              >
                https://help.shopify.com/en/manual/your-account/privacy/GDPR
              </Link>
              .
            </p>
            <p className="privacy-policy-title">CCPA</p>
            <p className="privacy-policy-text">
              If you are a resident of California, you have the right to access
              the Personal Information we hold about you (also known as the
              ‘Right to Know’), to port it to a new service, and to ask that
              your Personal Information be corrected, updated, or erased. If you
              would like to exercise these rights, please contact us through the
              contact information above.
            </p>
            <p className="privacy-policy-text">
              If you would like to designate an authorized agent to submit these
              requests on your behalf, please contact us at the address above.
            </p>
            <p className="privacy-policy-title">Cookies</p>
            <p className="privacy-policy-text">
              A cookie is a small amount of information that’s downloaded to
              your computer or device when you visit our Site. We use a number
              of different cookies, including functional, performance,
              advertising, and social media or content cookies. Cookies make
              your browsing experience better by allowing the website to
              remember your actions and preferences (such as login and region
              selection). This means you don’t have to re-enter this information
              each time you return to the site or browse from one page to
              another. Cookies also provide information on how people use the
              website, for instance whether it’s their first time visiting or if
              they are a frequent visitor.
            </p>
            <p className="privacy-policy-text">
              We use the following cookies to optimize your experience on our
              Site and to provide our services.
            </p>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
        </Grid>
      </div>
    </Layout>
  );
};
export default PrivacyPolicy;
