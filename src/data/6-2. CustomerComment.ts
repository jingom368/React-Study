import * as C from './1-5. chance'
import * as I from './1-5. image'
export type CustomerComment = {
    uuid: string
    name: string
    jobTitle: string
    company: string
    avatar: string
    comment: string
}

export const makeCustomerComment = (
    uuid: string,
    name: string,
    jobTitle: string,
    company: string,
    avatar: string,
    comment: string
): CustomerComment => ({uuid, name, jobTitle, company, comment, avatar})

export const makeRandomCustomerComment = () => {
    return makeCustomerComment(
        C.randomUUID(),
        C.randomName(),
        C.randomJobTitle(),
        C.randomCompanyName(),
        I.randomAvatar(),
        C.randomParagraphs(1)
    )
}
