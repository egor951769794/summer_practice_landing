export default function Background({content, color}) {
  const css = `
        .bg {
            background-color: ${color};
        }
        `
    return (
        <div class='bg'>
        <style>{css}</style>
        {content}
        </div>
    )
}
