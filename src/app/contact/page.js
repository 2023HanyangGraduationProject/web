export default function Page() {
    return (
        <>

{/* <div className="flex flex-col justify-around mt-20"> */}
            {/* </div> */}
            <div className="w-2/3 min-w-720 max-w-7xl min-h-96 max-h-screen  bg-white shadow-md rounded p-20 mx-auto mt-16 mb-4">
                <div className="text-2xl font-bold ml-20 mb-8">Technologies</div>
                <div className="flex justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/200px-GitHub_Invertocat_Logo.svg.png" alt="GitHub icon" className="w-20 h-20 mr-2" />
                    <a href="https://github.com/2023HanyangGraduationProject/web" className="flex items-center">
                        <div className="text-2xl font-semibold">2023HanyangGraduationProject/web</div>
                    </a>
                </div>
                <div className="mt-20 flex-col justify-items-center content-center">
                    <div className="text-2xl font-bold ml-20">Technologies</div>
                    <div className="flex flex-col flex-wrap justify-between items-center mt-10">
                        {/* <div className="w-1/6"> */}
                        <div className="flex flex-row">
                            <a href="https://ethereum.org/en/" className="flex flex-row" >
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Solidity_logo.svg/80px-Solidity_logo.svg.png" alt="Solidity icon" className="h-10" />
                                <span className="ml-2 text-xl font-semibold">Solidity</span>
                            </a>
                        </div>
                        <div className="flex flex-row mt-10">
                            <a href="https://hardhat.org/" className="flex items-center">
                                <img src="https://hardhat.org/_next/static/media/hardhat-logo.5c5f687b.svg" alt="Hardhat icon" className="h-10"/>
                                {/* <span className="ml-2 text-xl font-semibold">Hardhat</span> */}
                            </a>
                        </div>
                        <div className="flex flex-row mt-10">
                            <a href="https://vercel.com/solutions/nextjs" className="flex items-center">
                                <img src="/next.svg" alt="Next.js icon" className="h-10" />
                                {/* <span className="ml-2 text-xl font-semibold">Next.js</span> */}
                            </a>
                        </div>
                        <div className="flex flex-row mt-10">
                            <a href="https://vercel.com/" className="flex items-center">
                                <img src="/vercel.svg" alt="Vercel icon" className="h-10" />
                                {/* <span className="ml-2 text-xl font-semibold">Vercel</span> */}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
