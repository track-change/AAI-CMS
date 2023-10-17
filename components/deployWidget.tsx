import React from 'react'

const CloudflareDeployWidget = () => {
  const deployToCloudflare = async () => {
    try {
      const webhookURL =
        'https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/f0b19692-e20d-4e42-9cf3-16fe9d676df6'
      const response = await fetch(webhookURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (response.ok) {
        console.log('Deployment request successful')
      } else {
        console.error('Error deploying to Cloudflare:', response.statusText)
      }
    } catch (error) {
      console.error('Error deploying to Cloudflare:', error)
    }
  }

  return (
    <div>
      <button onClick={deployToCloudflare}>Deploy to Cloudflare</button>
    </div>
  )
}

export default CloudflareDeployWidget
