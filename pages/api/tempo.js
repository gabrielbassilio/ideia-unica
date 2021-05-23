async function tempo (req,res){
    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const dynamicData = new Date();
    
    const subscribersResponse = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiSecret}`);
    const subscribersResponseJson = await subscribersResponse.json();
    const inscritos = subscribersResponseJson.total_subscribers;
    res.json({
        date: dynamicData.toGMTString(),
        inscritos: inscritos
    })
}

export default tempo;