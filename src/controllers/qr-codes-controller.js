const QrCode = require('../models/qr-code-model');
const Trashes = require('../models/trash-model');
const {isObjectId} = require('../utils/functions');

exports.create = async (ctx) => {
    let reqData = ctx.request.body;
    if(!reqData.wasteType || !reqData.trashId || !isObjectId(reqData.trashId)){
        return ctx.badRequest({error:"FieldIncorrectOrMissing"})
    }else{
        let trash = await Trashes.findOne({uniqueId:reqData.trashId});
        if(!trash){
            return ctx.send(401, "PermissionDenied");
        }else{
            let qrCode = new QrCode({createdBy: reqData.trashId});
            qrCode.getPoints();
            await qrCode.save();
            return ctx.ok(qrCode);
        }

    }
}


exports.verify = async (ctx) => {
    let id = ctx.params.id;
    let qrCode = QrCode.findById({ QrCode });
    if (qrCode) {
        let time = Date.now();
        if (Math.floor(millis / 60000) > 10) {// 10 minutes
            return ctx.badRequest({ error: "Expiration" })
        }
    } else {
        return ctx.notFound({ error: "NotFound" })
    }
    return ctx.ok({})
}