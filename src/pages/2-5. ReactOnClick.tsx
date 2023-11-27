import type {SyntheticEvent} from 'react'

export default function ReackOnClick() {
    // document.getElementById('root')?.addEventListener('click', (e: Event) => {
    // if (rootDiv) {
    // rootDiv.onclick = (e: Event) => {
    const onClick = (e: SyntheticEvent) => {
        const {isTrusted, target, bubbles} = e
        console.log('mouse click occurs on <button>', isTrusted, target, bubbles)
    }
    return (
        <div>
            <p>ReactOnClick</p>
            <button onClick={onClick}>Click Me</button>
        </div>
    )
}
