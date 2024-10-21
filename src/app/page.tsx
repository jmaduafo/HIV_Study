
export default function Home() {
  return (
    <div className="h-screen bg-white text-black font-[family-name:var(--font-geist-sans)]">
      <main className="h-full">
        <div className="my-4 px-4">
          <p>If pdf does not display below, please click <a className="text-blue-400" download href="/assets/hiv_study.pdf">here</a> to download.</p>
        </div>
       <embed src={'/assets/hiv_study.pdf'} className="w-full h-full" width="100%" height="100%"/>
      </main>
    </div>
  );
}
