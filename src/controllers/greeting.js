export const morning = (req,res) =>{
    res.status(200).json({
        message: "Good Morning"
    })
}


export const afternoon = (req,res) =>{
    res.status(200).json({
        message: "Good After"
    })
}


export const night = (req,res) =>{
    res.status(200).json({
        message: "Good Night"
    })
}