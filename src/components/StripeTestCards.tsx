import Link from "next/link"

const StripeTestCards = () => {
    return (
      <div className="test-card-notice">
        Use any of the{' '}
        <Link
          href="https://stripe.com/docs/testing#cards"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stripe test cards
        </Link>{' '}
        for this demo, e.g.{' '}
        <div className="card-number">
          4242<span></span>4242<span></span>4242<span></span>4242
        </div>
        .
      </div>
    )
  }
  
  export default StripeTestCards