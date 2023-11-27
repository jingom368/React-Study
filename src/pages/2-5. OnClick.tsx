const rootDiv = document.getElementById('root')
if (rootDiv) {
    // document.getElementById('root')?.addEventListener('click', (e: Event) => {
        rootDiv.onclick = (e: Event) => {
        const {isTrusted, target, bubbles} = e
        console.log('mouse click occurs on rootDiv', isTrusted, target, bubbles)
    }
    // document.getElementById('root')?.addEventListener('click', (e: Event) => {
        rootDiv.onclick = (e: Event) => {
        const {isTrusted, target, bubbles} = e
        // prettier-ignore
        console.log('mouse click also occurs on rootDiv', isTrusted, target, bubbles)
}
}
export default function OnClick() {
    return <div>OnClick</div>
}
