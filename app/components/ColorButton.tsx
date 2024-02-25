'use client'

type ColorButtonProps ={
    color : string,
    active : boolean[],
    index : number,
    callback: (index:number)=>void
}

export default function ColorButton(props:ColorButtonProps){

    return(
        <div className={props.color+" w-10 h-10 rounded-3xl border-2 hover:border-neutral-50 mx-4 " + (props.active[props.index]?"border-neutral-50":"border-neutral-500")} onClick={()=>{props.callback(props.index)}}></div>
    )

}