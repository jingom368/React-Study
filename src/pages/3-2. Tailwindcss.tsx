import * as D from '../data'

export default function Tailwindcss() {
    return (
        <div className="bg-black/70">
            <p className="w-full p-4 text-3xl text-white">Talwindcss</p>
            <p className="italic text-gray-50 line-clamp-3">{D.randomParagraphs(10)}</p>
            <button className="btn btn-praimary" style={{textTransform: 'none'}}>
                Button
            </button>
        </div>
    )
}
