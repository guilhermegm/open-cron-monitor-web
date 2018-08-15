const Joi = require('joi')

const create = async (ctx, { Report }) => {
  const data = await Joi.validate(
    ctx.request.body,
    Joi.object().keys({
      name: Joi.string().required(),
      success: Joi.boolean().required(),
      log: Joi.string(),
    }),
  )

  ctx.body = await Report.create(data)
}

const get = async (ctx, { Report }) => {
  ctx.body = await Report.findAll({ order: [['createdAt', 'DESC']] })
}

const getById = async (ctx, { Report }) => {
  const data = await Joi.validate(
    ctx.params,
    Joi.object().keys({
      reportId: Joi.string().required(),
    }),
  )

  ctx.body = await Report.findById(data.reportId)
}

module.exports = {
  create,
  get,
  getById,
}
