import Image from "next/image";

interface EmptyProps {
    label: string,
}

export function Empty( { label } : EmptyProps )
{
    return (
        <div className="h-full p-20 flex flex-col items-center justify-center">
            <div className="relative h-72 w-72">
                <Image fill alt="Empty" src={"/empty.png"} />
            </div>
            <p className="text-muted-foreground text-center text-sm">{label}</p>
        </div>
    )
}