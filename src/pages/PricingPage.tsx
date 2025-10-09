import React, { useState } from 'react';
import { Check, HelpCircle, Zap } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [apiCalls, setApiCalls] = useState<number>(100000);

  const calculateCustomPrice = () => {
    // Basic pricing formula
    let price = 0;
    
    if (apiCalls <= 100000) {
      price = apiCalls * 0.0001; // $0.0001 per call for first 100K
    } else if (apiCalls <= 1000000) {
      price = 10 + (apiCalls - 100000) * 0.00005; // $0.00005 per call for next 900K
    } else {
      price = 55 + (apiCalls - 1000000) * 0.00002; // $0.00002 per call after 1M
    }
    
    // Apply annual discount
    if (billingPeriod === 'annual') {
      price = price * 0.8; // 20% discount for annual
    }
    
    return Math.round(price);
  };

  // Format number with commas
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
            Pay only for what you use with no hidden fees. Choose the plan that fits your needs and scale as you grow.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-primary-800 p-1 rounded-lg mb-6">
            <button
              className={`py-2 px-4 rounded-md text-sm font-medium ${
                billingPeriod === 'monthly' 
                  ? 'bg-primary-600 text-white' 
                  : 'text-primary-200 hover:text-white'
              }`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Monthly
            </button>
            <button
              className={`py-2 px-4 rounded-md text-sm font-medium ${
                billingPeriod === 'annual' 
                  ? 'bg-primary-600 text-white' 
                  : 'text-primary-200 hover:text-white'
              }`}
              onClick={() => setBillingPeriod('annual')}
            >
              Annual <span className="text-xs ml-1 opacity-90">Save 20%</span>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Tier */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-neutral-200 flex flex-col">
            <div className="p-6 border-b border-neutral-200">
              <h2 className="text-2xl font-bold mb-2">Starter</h2>
              <p className="text-neutral-600 mb-4">Perfect for individual developers and small projects</p>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-neutral-500 ml-2 mb-1">/month</span>
              </div>
              <button className="btn-outline w-full">Get Started Free</button>
            </div>
            <div className="p-6 bg-neutral-50 flex-grow">
              <h3 className="font-medium mb-4">What's included:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check size={18} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>10,000 API calls per month</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Access to basic models</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Community support</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Standard rate limiting</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Basic analytics</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pro Tier */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-primary-200 flex flex-col relative">
            <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
              MOST POPULAR
            </div>
            <div className="p-6 border-b border-primary-200 bg-primary-50">
              <h2 className="text-2xl font-bold mb-2">Pro</h2>
              <p className="text-neutral-600 mb-4">For growing businesses and serious developers</p>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold">${billingPeriod === 'monthly' ? '49' : '39'}</span>
                <span className="text-neutral-500 ml-2 mb-1">/month</span>
              </div>
              <button className="btn-primary w-full">Start Pro Plan</button>
            </div>
            <div className="p-6 flex-grow">
              <h3 className="font-medium mb-4">Everything in Free, plus:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check size={18} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>100,000 API calls per month</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Access to all standard models</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Priority support (24-hour response)</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Higher rate limits</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Advanced analytics and reporting</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Custom model fine-tuning</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Team collaboration (up to 5 members)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Enterprise Tier */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-neutral-200 flex flex-col">
            <div className="p-6 border-b border-neutral-200">
              <h2 className="text-2xl font-bold mb-2">Enterprise</h2>
              <p className="text-neutral-600 mb-4">For organizations with advanced AI needs</p>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <button className="btn-outline w-full">Contact Sales</button>
            </div>
            <div className="p-6 bg-neutral-50 flex-grow">
              <h3 className="font-medium mb-4">Everything in Pro, plus:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check size={18} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Unlimited API calls</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Access to all models including premium</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>24/7 priority support</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Custom SLAs and uptime guarantees</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Advanced security features</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Unlimited team members</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>On-premises deployment options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* API Pricing Calculator */}
      <div className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">API Pricing Calculator</h2>
            <p className="text-neutral-600 text-lg mb-10 text-center">
              Estimate your monthly costs based on your expected API usage.
            </p>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <div className="mb-8">
                  <label htmlFor="api-calls" className="block text-sm font-medium text-neutral-700 mb-2">
                    Estimated monthly API calls
                  </label>
                  <input
                    type="range"
                    id="api-calls"
                    min="10000"
                    max="10000000"
                    step="10000"
                    value={apiCalls}
                    onChange={(e) => setApiCalls(parseInt(e.target.value))}
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="mt-2 flex justify-between text-sm text-neutral-500">
                    <span>10K</span>
                    <span>100K</span>
                    <span>1M</span>
                    <span>10M</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Your Usage</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-neutral-500">API Calls</span>
                          <span className="text-sm font-medium">{formatNumber(apiCalls)}</span>
                        </div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-neutral-500">Billing Period</span>
                          <span className="text-sm font-medium capitalize">{billingPeriod}</span>
                        </div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-neutral-500">Price per 1K calls</span>
                          <span className="text-sm font-medium">
                            ${apiCalls <= 100000 ? '0.10' : apiCalls <= 1000000 ? '0.05' : '0.02'}
                          </span>
                        </div>
                        {billingPeriod === 'annual' && (
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-neutral-500">Annual discount</span>
                            <span className="text-sm font-medium text-success-600">-20%</span>
                          </div>
                        )}
                      </div>
                      <div className="pt-4 border-t border-neutral-200">
                        <div className="flex justify-between">
                          <span className="font-medium">Estimated monthly cost</span>
                          <span className="font-bold text-xl">${calculateCustomPrice()}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium mb-4">What's included</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check size={18} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Access to all standard models</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>24/7 technical support</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>No long-term commitments</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Scale up or down at any time</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Advanced analytics and monitoring</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="px-8 py-4 bg-neutral-50 border-t border-neutral-200">
                <p className="text-sm text-neutral-500">
                  This is an estimate based on current pricing. Actual costs may vary based on your specific usage patterns. For high-volume custom pricing, please contact our sales team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <p className="text-neutral-600 text-lg mb-12 text-center max-w-3xl mx-auto">
          Find answers to common questions about our pricing and billing.
        </p>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">How do you count API calls?</h3>
            <p className="text-neutral-600">
              An API call is counted each time you make a request to our API endpoints. This includes both successful requests and requests that return errors due to invalid parameters.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Can I change plans at any time?</h3>
            <p className="text-neutral-600">
              Yes, you can upgrade, downgrade, or cancel your plan at any time. When upgrading, the new rate will be applied immediately. When downgrading, the new rate will be applied at the start of your next billing cycle.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Do unused API calls roll over?</h3>
            <p className="text-neutral-600">
              No, unused API calls do not roll over to the next billing period. However, you can always adjust your plan based on your actual usage patterns.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">What happens if I exceed my API limit?</h3>
            <p className="text-neutral-600">
              If you exceed your monthly API call limit, you'll be charged for the additional usage at your plan's overage rate. You can set up usage alerts to be notified when you're approaching your limit.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Do you offer academic or non-profit discounts?</h3>
            <p className="text-neutral-600">
              Yes, we offer special pricing for academic institutions and non-profit organizations. Please contact our sales team with details about your organization to learn more.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">What payment methods do you accept?</h3>
            <p className="text-neutral-600">
              We accept all major credit cards (Visa, Mastercard, American Express), as well as PayPal. For Enterprise plans, we also support invoicing and wire transfers.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Choose the plan that works for your needs and start building with CASTA DESK today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn bg-white text-primary-700 hover:bg-primary-50 focus:ring-white">
              Start Free Trial
            </button>
            <button className="btn border-2 border-white text-white hover:bg-primary-800 focus:ring-white">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;