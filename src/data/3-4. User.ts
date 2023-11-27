import * as C from './1-5. chance'
import * as I from './1-5. image'

export type IUser = {
    uuid: string
    name: string
    jobTitle: string
    email: string
    avatar: string
}

// prettier-ignore
export const makeUser = (
    uuid: string, name: string, jobTitle: string, email: string, avatar: string
): IUser => ({uuid, name, jobTitle, email, avatar})
export const makeRandomUser = (): IUser =>
    makeUser(
        C.randomUUID(),
        C.randomName(),
        C.randomJobTitle(),
        C.randomEmail(),
        I.randomAvatar()
    )