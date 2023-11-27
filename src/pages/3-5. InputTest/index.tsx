// 3.5

import {start} from 'repl'
import Basic from './3-5. Basic'
import Border from './3-5. Border'
import Color from './3-5. Color'
import Size from './3-5. Size'

export default function indexTest() {
    return (
        <section className="mt-4">
            <h2 className="text-5xl font-bold text-center">index</h2>
            <div className="mt-4">
                <Size />
                <Border />
                <Color />
                <Basic />
            </div>
        </section>
    )
}
