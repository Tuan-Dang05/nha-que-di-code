import React, { forwardRef } from 'react';
import './product.css';
// import ProductCard from './minigame/product_card';
import CvTool from './CV_Tool/cv_tool';


const Product = ({ showToast, product }, ref) => {
    // const show = () =>{
    //     console.log(showToast)
    //     // showToast.style.display = 'block';

    // }
    return (
        <div className='container-fluid'>
            <div className='text-center fw-medium' style={{ fontSize: 'clamp(35px,4vw,50px)', marginTop: '100px' }}>Sản phẩm của chúng tớ</div>
            <hr />
            <div className="text-center fs-1 fw-bolder" >
                <span className="me-3">
                    <img src='./img/gif/arcade-game.gif' width={50} alt='arcade-game' />

                    {/* <lord-icon src="https://cdn.lordicon.com/nizfqlnk.json" trigger="loop" delay={1000} colors="primary:#000000" style={{ width: 40, height: 40 }}>
                    </lord-icon> */}
                </span>

                Mini Game 
                <span className="ms-3">
                    <img src='./img/gif/arcade-game.gif' width={50} alt='arcade-game' />

                    {/* <lord-icon src="https://cdn.lordicon.com/nizfqlnk.json" trigger="loop" delay={1000} colors="primary:#000000" style={{ width: 40, height: 40 }}>
                    </lord-icon> */}
                </span>
                {product}
            </div>
            <div className='col-12' ref={ref}>
                <div className="wrapper_product">
                    <div className="card_product mt-4 mb-4" data-aos="flip-left" data-aos-duration="2000">
                        {/* TETRIS GAME */}
                        <div className="poster"><img src="./img/minigame/game_1.png" alt="Simple Tetris Game" /></div>
                        <div className="details">
                            <h1>Simple Tetris Game</h1>
                            <h2>2024 • Tuan_Dang • javascipt</h2>
                            <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="far fa-star" />
                                <span className='text-light'>4.2/5</span>
                            </div>
                            <div className="tags">
                                <span className="tag">#Game</span>
                                <span className="tag">#JavaScript</span>
                                <span className="tag">#Tetris</span>
                            </div>
                            <p className="desc">
                                Tetris cổ điển: Trò chơi giải đố mang tính biểu tượng đã trở lại!
                            </p>
                            <div className="cast">
                                <h4>Xem Trước & tải về</h4>
                                <ul>
                                    <li>
                                        <a href='https://tuan-dang05.github.io/Simple-Tetris-Game/' target='_blank' rel="noreferrer"><img src="./img/gif/view.gif" alt="view.gif" /></a>
                                    </li>
                                    <li id='showtoast' onClick={showToast}>
                                        <img src="./img/gif/download.gif" alt="download.gif" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card_product mt-4 mb-4" data-aos="flip-right" data-aos-duration="2000">
                        {/* Tic Tac Toe Game */}
                        <div className="poster"><img src="./img/minigame/game_2.png" alt="Tic Tac Toe Game" /></div>
                        <div className="details">
                            <h1>Tic Tac Toe Game</h1>
                            <h2>2024 • Tuan_Dang • javascipt</h2>
                            <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="far fa-star" />
                                <span className='text-light'>4.2/5</span>
                            </div>
                            <div className="tags">
                                <span className="tag">#Game</span>
                                <span className="tag">#JavaScript</span>
                                <span className="tag">#Tic Tac</span>
                            </div>
                            <p className="desc">
                                Đã đến lúc thể hiện kỹ năng Tic Tac Toe của bạn!
                            </p>
                            <div className="cast">
                                <h4>Xem Trước & tải về</h4>

                                <ul>
                                    <li>
                                    <a href='https://tuan-dang05.github.io/Tic-Tac-Game/' target='_blank' rel="noreferrer"><img src="./img/gif/view.gif" alt="view.gif" /></a>
                                    </li>
                                    <li id='showtoast' onClick={showToast}>

                                        <img src="./img/gif/download.gif" alt="download.gif" />
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card_product mt-4 mb-4" data-aos="flip-left" data-aos-duration="2000">
                        <div className="poster"><img src="./img/minigame/game_3.png" alt="Simple Tetris Game" /></div>
                        <div className="details">
                            <h1>Memory Game</h1>
                            <h2>2025 • Tuan_Dang • javascipt</h2>
                            <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="far fa-star" />
                                <span className='text-light'>4.2/5</span>
                            </div>
                            <div className="tags">
                                <span className="tag">#Game</span>
                                <span className="tag">#JavaScript</span>
                                <span className="tag">#Memory Game</span>
                            </div>
                            <p className="desc">
                                Memory game: trò chơi giúp bạn có trí nhớ siêu phàm!
                            </p>
                            <div className="cast">
                                <h4>Xem Trước & tải về</h4>

                                <ul>
                                    <li>
                                    <a href='https://tuan-dang05.github.io/memory-game/' target='_blank' rel="noreferrer"><img src="./img/gif/view.gif" alt="view.gif" /></a>
                                    </li>
                                    <li id='showtoast' onClick={showToast}>
                                        <img src="./img/gif/download.gif" alt="download.gif" />
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card_product mt-4 mb-4" data-aos="flip-right" data-aos-duration="2000" >
                        <div className="poster"><img src="./img/minigame/game_4.png" alt="Simple Tetris Game" /></div>
                        <div className="details">
                            <h1>Simple Snake Game</h1>
                            <h2>2025 • Tuan_Dang • javascipt</h2>
                            <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="far fa-star" />
                                <span className='text-light'>4.2/5</span>
                            </div>
                            <div className="tags">
                                <span className="tag">#Game</span>
                                <span className="tag">#JavaScript</span>
                                <span className="tag">#Snake</span>
                            </div>
                            <p className="desc">
                                Snake game: giúp bạn xả trét sau những giờ làm việc mệt mỏi
                            </p>
                            <div className="cast">
                                <h4>Xem Trước & tải về</h4>

                                <ul>
                                    <li>
                                    <a href='https://tuan-dang05.github.io/snake-game/' target='_blank' rel="noreferrer"><img src="./img/gif/view.gif" alt="view.gif" /></a>
                                    </li>
                                    <li id='showtoast' onClick={showToast}>
                                        <img src="./img/gif/download.gif" alt="download.gif" />
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="text-center fs-1 fw-bolder">
                <span className="me-3">
                    <img src='./img/gif/passion.gif' width={50} alt='fire' />
                </span>

                CV Tool
                <span className="ms-3">

                    <img src='./img/gif/passion.gif' width={50} alt='fire' />
                </span>
                <h4 className='text-secondary mt-3'>Công cụ tạo CV dành cho riêng bạn</h4>
            </div>
            <div className="col-12">
                <CvTool showToolToast={showToast}/>
            </div>
        </div>
    );
}

export default forwardRef(Product);
