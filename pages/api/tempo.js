function tempo (req,res){
    const dynamicData = new Date();
    
    res.json({
        date: dynamicData.toGMTString()
    })
}

export default tempo;