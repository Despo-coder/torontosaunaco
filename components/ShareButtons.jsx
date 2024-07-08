import {FacebookIcon, 
    FacebookShareButton, 
    TwitterShareButton, 
    TwitterIcon, 
    WhatsappIcon, 
    WhatsappShareButton, 
    EmailShareButton, 
    EmailIcon,
    
  } from 'react-share'
  
  const ShareButtons = ({product}) => {
    const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/saunas/${product._id}` 
    return (
      <>
      <h3 className="text-xl font-bold text-center pt-2">
        Share this product
      </h3>
      <div className="flex gap-3 justify-center pb-5">
        
        <FacebookShareButton 
          url={shareUrl}
          quote={product.name}
          hashtag={`#${product.type} For Sale`}
          >
          <FacebookIcon size={32} round={true}/>
          </FacebookShareButton>

          <EmailShareButton
          url={shareUrl}
          subject={`${product.name} - ${product.type} For Sale`}
          >
            <EmailIcon size={32} round={true}/>
            </EmailShareButton>

            <TwitterShareButton
            url={shareUrl}
            title={product.name}
            // via="NextJS"
            >
              <TwitterIcon size={32} round={true}/>
              </TwitterShareButton>

              <WhatsappShareButton
              url={shareUrl}
              title={product.name}
              separator=":: "
              hashtags={[`${product.type}`, "For Sale"]}
              >
                <WhatsappIcon size={32} round={true}/>
                </WhatsappShareButton>
                
      </div>
      </>
    )
  }
  
  export default ShareButtons
  