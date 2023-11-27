import { NextResponse } from 'next/server';

let intervalId;

export async function POST(req, res) {
  try {
    const { method } = req;
    const body = await req.json();

    if (method === 'POST') {
      if (body.action === 'start') {
        if (!intervalId) {
          // setInterval 시작
          intervalId = setInterval(() => {
            // 실행할 코드
            console.log('Interval is running...');
          }, 1000); // 예시: 1초마다 실행

          return NextResponse.json({
            status: 200,
            message: 'Interval started',
          });
        } else {
          return NextResponse.json({
            status: 400,
            message: 'Interval already running',
          });
        }
      } else if (body.action === 'stop') {
        if (intervalId) {
          // setInterval 멈추기
          clearInterval(intervalId);
          intervalId = null;
          return NextResponse.json({
            status: 200,
            message: 'Interval stopped',
          });
        } else {
          return NextResponse.json({
            status: 400,
            message: 'Interval not running',
          });
        }
      } else {
        return NextResponse.json({ status: 400, message: 'Bad request' });
      }
    } else {
      return NextResponse.json({ status: 405, message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error occurred:', error);
    return NextResponse.json({ status: 500, message: 'Internal server error' });
  }
}

export async function GET(req, res) {
  try {
    const { method } = req;

    if (method === 'GET') {
      if (intervalId) {
        return NextResponse.json({
          status: 200,
          message: 'Interval is running',
        });
      } else {
        return NextResponse.json({
          status: 400,
          message: 'Interval not running',
        });
      }
    } else {
      return NextResponse.json({ status: 405, message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error occurred:', error);
    return NextResponse.json({ status: 500, message: 'Internal server error' });
  }
}
