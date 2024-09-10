'use client'

export function CustomButton({ text, text2, type, color, onClickFunction }) {
    function selectButtonStyle() {
        const styles = {
            primary: (
                <button className={`w-full sm:w-auto px-6 py-3 font-sans text-sm font-semibold text-white transition-all rounded-lg middle none center ${color ?? "bg-red-700"} hover:bg-opacity-85 active:opacity-80 border border-zinc-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`} onClick={onClickFunction}>
                    {text}
                </button>
            ),
            secondary: (
                <button className="w-full sm:w-auto px-6 py-3 font-sans text-sm font-semibold text-white transition-all rounded-lg middle none center hover:bg-zinc-700 active:opacity-80 border border-zinc-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={onClickFunction}>
                    {text}
                </button>),
            newChat: (
                <div className="rounded-xl border border-zinc-600 p-4 flex flex-col gap-1 w-[45%] hover:bg-zinc-700 cursor-pointer active:opacity-80 transition-all" onClick={onClickFunction}>
                    <h4 className="font-semibold">{text}</h4>
                    <p className="opacity-65 truncate">{text2}</p>
                </div>
            )
        }
        return type ? styles[type] : styles.secondary;

    }
    return (
        selectButtonStyle()
    );
}
