import type {IUser} from './3-4. User'
import {makeRandomUser} from './3-4. User'
import * as C from './1-5. chance'
import * as I from './1-5. image'
import * as D from './1-5. date'

export type ICard = {
    uuid: string
    writer: IUser
    image: string
    title: string
    paragraphs: string
    dayMonthYearDate: string
    relativeDate: string | null
}

export const makeCard = (
    uuid: string,
    writer: IUser,
    image: string,
    title: string,
    paragraphs: string,
    dayMonthYearDate: string,
    relativeDate: string | null
): ICard => ({uuid, writer, image, title, paragraphs, dayMonthYearDate, relativeDate})

export const makeRandomCard = () => {
    const date = D.makeRandomPastDate()
    return makeCard(
        C.randomUUID(),
        makeRandomUser(),
        I.randomImage(800, 600),
        C.randomTitleText(),
        C.randomParagraphs(5),
        D.makeDayMonthYear(date),
        D.makeRelativeDate(date)
    )
}
