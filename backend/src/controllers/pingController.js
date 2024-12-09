export async function pingCheck(req,res)
{

    console.log('i am hit')
    return res.status(200).json({
        message:'pong'
    })
}

