import Joi from "joi";

const schema = Joi.object({
    email: Joi.string().email().required(),
    name:  Joi.string().required(),
    description: Joi.string().required()

})
export default schema;