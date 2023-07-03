export default function Background({content, color}) {
  const css = `
        .bg {
            background-color: ${color};
        }
        `
    return (
        <div className='bg'>
        <style>{css}</style>
        {content}
        </div>
    )
}
