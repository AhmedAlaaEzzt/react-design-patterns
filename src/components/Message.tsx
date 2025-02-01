type TMessageProps ={
    message: string
}

export function Message  (props: TMessageProps)  {
    const {message} = props
    return <div>{message}</div>
  }