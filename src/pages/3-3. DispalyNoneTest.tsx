import {Title} from '../components/3-2. Texts'

export default function DispalyNoneTest() {
    return (
        <section className="mt-4">
            <Title>DisplayNonetest</Title>
            <div className="mt-4">
                <p className="visible">visibility: visible</p>
                <p className="invisible">visibility: invisible</p>
                <p className="hidden">display: none</p>
            </div>
        </section>
    )
}
