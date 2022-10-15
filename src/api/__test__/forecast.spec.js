import fetchMock from "jest-fetch-mock";
import { getForecastByCity, getForecastByLatLon } from "../forecast";
import { ERROR_INVALID_CITY, ERROR_INVALID_LAT_LON } from "../common";

fetchMock.enableMocks();

export const forecastApiMockedResponse = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
     {
        "dt": 1665759600,
        "main": {
           "temp": 300.71,
           "feels_like": 304.57,
           "temp_min": 300.71,
           "temp_max": 300.97,
           "pressure": 1013,
           "sea_level": 1013,
           "grnd_level": 1014,
           "humidity": 83,
           "temp_kf": -0.26
        },
        "weather": [
           {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
           }
        ],
        "clouds": {
           "all": 100
        },
        "wind": {
           "speed": 2.05,
           "deg": 23,
           "gust": 1.86
        },
        "visibility": 10000,
        "pop": 0.05,
        "sys": {
           "pod": "d"
        },
        "dt_txt": "2022-10-14 15:00:00"
     },
     {
        "dt": 1665770400,
        "main": {
           "temp": 301.41,
           "feels_like": 305.09,
           "temp_min": 301.41,
           "temp_max": 302.81,
           "pressure": 1013,
           "sea_level": 1013,
           "grnd_level": 1012,
           "humidity": 75,
           "temp_kf": -1.4
        },
        "weather": [
           {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
           }
        ],
        "clouds": {
           "all": 98
        },
        "wind": {
           "speed": 2.8,
           "deg": 60,
           "gust": 2.35
        },
        "visibility": 10000,
        "pop": 0.04,
        "sys": {
           "pod": "d"
        },
        "dt_txt": "2022-10-14 18:00:00"
     },
     {
        "dt": 1665781200,
        "main": {
           "temp": 301.58,
           "feels_like": 304.52,
           "temp_min": 301.58,
           "temp_max": 302.01,
           "pressure": 1012,
           "sea_level": 1012,
           "grnd_level": 1011,
           "humidity": 69,
           "temp_kf": -0.43
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
           }
        ],
        "clouds": {
           "all": 88
        },
        "wind": {
           "speed": 4.51,
           "deg": 73,
           "gust": 3.88
        },
        "visibility": 10000,
        "pop": 0.54,
        "rain": {
           "3h": 0.26
        },
        "sys": {
           "pod": "d"
        },
        "dt_txt": "2022-10-14 21:00:00"
     },
     {
        "dt": 1665792000,
        "main": {
           "temp": 300.67,
           "feels_like": 302.92,
           "temp_min": 300.67,
           "temp_max": 300.67,
           "pressure": 1013,
           "sea_level": 1013,
           "grnd_level": 1013,
           "humidity": 70,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
           }
        ],
        "clouds": {
           "all": 89
        },
        "wind": {
           "speed": 4.6,
           "deg": 48,
           "gust": 5.05
        },
        "visibility": 10000,
        "pop": 0.84,
        "rain": {
           "3h": 2.19
        },
        "sys": {
           "pod": "n"
        },
        "dt_txt": "2022-10-15 00:00:00"
     },
     {
        "dt": 1665802800,
        "main": {
           "temp": 300.07,
           "feels_like": 302.03,
           "temp_min": 300.07,
           "temp_max": 300.07,
           "pressure": 1015,
           "sea_level": 1015,
           "grnd_level": 1015,
           "humidity": 72,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 501,
              "main": "Rain",
              "description": "moderate rain",
              "icon": "10n"
           }
        ],
        "clouds": {
           "all": 96
        },
        "wind": {
           "speed": 3.9,
           "deg": 69,
           "gust": 4.87
        },
        "visibility": 10000,
        "pop": 0.87,
        "rain": {
           "3h": 5.64
        },
        "sys": {
           "pod": "n"
        },
        "dt_txt": "2022-10-15 03:00:00"
     },
     {
        "dt": 1665813600,
        "main": {
           "temp": 300.05,
           "feels_like": 302.24,
           "temp_min": 300.05,
           "temp_max": 300.05,
           "pressure": 1015,
           "sea_level": 1015,
           "grnd_level": 1014,
           "humidity": 75,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
           }
        ],
        "clouds": {
           "all": 83
        },
        "wind": {
           "speed": 3.66,
           "deg": 83,
           "gust": 4.58
        },
        "visibility": 10000,
        "pop": 0.9,
        "rain": {
           "3h": 1.63
        },
        "sys": {
           "pod": "n"
        },
        "dt_txt": "2022-10-15 06:00:00"
     },
     {
        "dt": 1665824400,
        "main": {
           "temp": 300.06,
           "feels_like": 302.26,
           "temp_min": 300.06,
           "temp_max": 300.06,
           "pressure": 1014,
           "sea_level": 1014,
           "grnd_level": 1014,
           "humidity": 75,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
           }
        ],
        "clouds": {
           "all": 68
        },
        "wind": {
           "speed": 3.31,
           "deg": 69,
           "gust": 4.33
        },
        "visibility": 10000,
        "pop": 0.74,
        "rain": {
           "3h": 1.49
        },
        "sys": {
           "pod": "n"
        },
        "dt_txt": "2022-10-15 09:00:00"
     },
     {
        "dt": 1665835200,
        "main": {
           "temp": 300.1,
           "feels_like": 302.34,
           "temp_min": 300.1,
           "temp_max": 300.1,
           "pressure": 1015,
           "sea_level": 1015,
           "grnd_level": 1015,
           "humidity": 75,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
           }
        ],
        "clouds": {
           "all": 57
        },
        "wind": {
           "speed": 3.75,
           "deg": 60,
           "gust": 4.79
        },
        "visibility": 10000,
        "pop": 0.71,
        "sys": {
           "pod": "d"
        },
        "dt_txt": "2022-10-15 12:00:00"
     },
     {
        "dt": 1665846000,
        "main": {
           "temp": 301.32,
           "feels_like": 304.01,
           "temp_min": 301.32,
           "temp_max": 301.32,
           "pressure": 1017,
           "sea_level": 1017,
           "grnd_level": 1017,
           "humidity": 69,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
           }
        ],
        "clouds": {
           "all": 24
        },
        "wind": {
           "speed": 5.21,
           "deg": 58,
           "gust": 5.29
        },
        "visibility": 10000,
        "pop": 0.76,
        "rain": {
           "3h": 1.39
        },
        "sys": {
           "pod": "d"
        },
        "dt_txt": "2022-10-15 15:00:00"
     },
     {
        "dt": 1665856800,
        "main": {
           "temp": 302.06,
           "feels_like": 304.82,
           "temp_min": 302.06,
           "temp_max": 302.06,
           "pressure": 1015,
           "sea_level": 1015,
           "grnd_level": 1015,
           "humidity": 65,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
           }
        ],
        "clouds": {
           "all": 26
        },
        "wind": {
           "speed": 6.39,
           "deg": 72,
           "gust": 6.1
        },
        "visibility": 10000,
        "pop": 0.94,
        "rain": {
           "3h": 1.25
        },
        "sys": {
           "pod": "d"
        },
        "dt_txt": "2022-10-15 18:00:00"
     },
     {
        "dt": 1665867600,
        "main": {
           "temp": 301.48,
           "feels_like": 304.03,
           "temp_min": 301.48,
           "temp_max": 301.48,
           "pressure": 1015,
           "sea_level": 1015,
           "grnd_level": 1015,
           "humidity": 67,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
           }
        ],
        "clouds": {
           "all": 31
        },
        "wind": {
           "speed": 6.21,
           "deg": 61,
           "gust": 6.29
        },
        "visibility": 10000,
        "pop": 0.96,
        "rain": {
           "3h": 1.88
        },
        "sys": {
           "pod": "d"
        },
        "dt_txt": "2022-10-15 21:00:00"
     },
     {
        "dt": 1665878400,
        "main": {
           "temp": 300.32,
           "feels_like": 302.48,
           "temp_min": 300.32,
           "temp_max": 300.32,
           "pressure": 1016,
           "sea_level": 1016,
           "grnd_level": 1016,
           "humidity": 72,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
           }
        ],
        "clouds": {
           "all": 27
        },
        "wind": {
           "speed": 6.38,
           "deg": 61,
           "gust": 7.13
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
           "3h": 0.91
        },
        "sys": {
           "pod": "n"
        },
        "dt_txt": "2022-10-16 00:00:00"
     },
     {
        "dt": 1665889200,
        "main": {
           "temp": 300,
           "feels_like": 302.07,
           "temp_min": 300,
           "temp_max": 300,
           "pressure": 1017,
           "sea_level": 1017,
           "grnd_level": 1017,
           "humidity": 74,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
           }
        ],
        "clouds": {
           "all": 25
        },
        "wind": {
           "speed": 5.69,
           "deg": 69,
           "gust": 6.91
        },
        "visibility": 10000,
        "pop": 0.72,
        "rain": {
           "3h": 0.77
        },
        "sys": {
           "pod": "n"
        },
        "dt_txt": "2022-10-16 03:00:00"
     },
     {
        "dt": 1665900000,
        "main": {
           "temp": 299.61,
           "feels_like": 299.61,
           "temp_min": 299.61,
           "temp_max": 299.61,
           "pressure": 1016,
           "sea_level": 1016,
           "grnd_level": 1016,
           "humidity": 76,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
           }
        ],
        "clouds": {
           "all": 21
        },
        "wind": {
           "speed": 5.38,
           "deg": 71,
           "gust": 6.7
        },
        "visibility": 10000,
        "pop": 0.68,
        "rain": {
           "3h": 0.51
        },
        "sys": {
           "pod": "n"
        },
        "dt_txt": "2022-10-16 06:00:00"
     },
     {
        "dt": 1665910800,
        "main": {
           "temp": 299.64,
           "feels_like": 299.64,
           "temp_min": 299.64,
           "temp_max": 299.64,
           "pressure": 1015,
           "sea_level": 1015,
           "grnd_level": 1015,
           "humidity": 76,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
           }
        ],
        "clouds": {
           "all": 16
        },
        "wind": {
           "speed": 5.41,
           "deg": 65,
           "gust": 6.8
        },
        "visibility": 10000,
        "pop": 0.41,
        "rain": {
           "3h": 0.22
        },
        "sys": {
           "pod": "n"
        },
        "dt_txt": "2022-10-16 09:00:00"
     },
     {
        "dt": 1665921600,
        "main": {
           "temp": 299.68,
           "feels_like": 299.68,
           "temp_min": 299.68,
           "temp_max": 299.68,
           "pressure": 1016,
           "sea_level": 1016,
           "grnd_level": 1016,
           "humidity": 75,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
           }
        ],
        "clouds": {
           "all": 16
        },
        "wind": {
           "speed": 5.94,
           "deg": 67,
           "gust": 7.28
        },
        "visibility": 10000,
        "pop": 0.54,
        "rain": {
           "3h": 0.62
        },
        "sys": {
           "pod": "d"
        },
        "dt_txt": "2022-10-16 12:00:00"
     },
     {
        "dt": 1665932400,
        "main": {
           "temp": 301.24,
           "feels_like": 303.72,
           "temp_min": 301.24,
           "temp_max": 301.24,
           "pressure": 1017,
           "sea_level": 1017,
           "grnd_level": 1017,
           "humidity": 68,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
           }
        ],
        "clouds": {
           "all": 27
        },
        "wind": {
           "speed": 6.84,
           "deg": 77,
           "gust": 7.45
        },
        "visibility": 10000,
        "pop": 0.42,
        "rain": {
           "3h": 0.35
        },
        "sys": {
           "pod": "d"
        },
        "dt_txt": "2022-10-16 15:00:00"
     },
     {
        "dt": 1665943200,
        "main": {
           "temp": 301.97,
           "feels_like": 304.49,
           "temp_min": 301.97,
           "temp_max": 301.97,
           "pressure": 1015,
           "sea_level": 1015,
           "grnd_level": 1015,
           "humidity": 64,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
           }
        ],
        "clouds": {
           "all": 25
        },
        "wind": {
           "speed": 6.97,
           "deg": 79,
           "gust": 7.05
        },
        "visibility": 10000,
        "pop": 0.6,
        "rain": {
           "3h": 0.4
        },
        "sys": {
           "pod": "d"
        },
        "dt_txt": "2022-10-16 18:00:00"
     },
     {
        "dt": 1665954000,
        "main": {
           "temp": 301.43,
           "feels_like": 303.8,
           "temp_min": 301.43,
           "temp_max": 301.43,
           "pressure": 1014,
           "sea_level": 1014,
           "grnd_level": 1014,
           "humidity": 66,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
           }
        ],
        "clouds": {
           "all": 26
        },
        "wind": {
           "speed": 6.53,
           "deg": 78,
           "gust": 6.77
        },
        "visibility": 10000,
        "pop": 0.64,
        "rain": {
           "3h": 0.29
        },
        "sys": {
           "pod": "d"
        },
        "dt_txt": "2022-10-16 21:00:00"
     },
     {
        "dt": 1665964800,
        "main": {
           "temp": 300.47,
           "feels_like": 302.56,
           "temp_min": 300.47,
           "temp_max": 300.47,
           "pressure": 1015,
           "sea_level": 1015,
           "grnd_level": 1015,
           "humidity": 70,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
           }
        ],
        "clouds": {
           "all": 24
        },
        "wind": {
           "speed": 5.91,
           "deg": 77,
           "gust": 6.47
        },
        "visibility": 10000,
        "pop": 0.74,
        "rain": {
           "3h": 0.26
        },
        "sys": {
           "pod": "n"
        },
        "dt_txt": "2022-10-17 00:00:00"
     },
     {
        "dt": 1665975600,
        "main": {
           "temp": 299.81,
           "feels_like": 299.81,
           "temp_min": 299.81,
           "temp_max": 299.81,
           "pressure": 1015,
           "sea_level": 1015,
           "grnd_level": 1015,
           "humidity": 73,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
           }
        ],
        "clouds": {
           "all": 39
        },
        "wind": {
           "speed": 5.81,
           "deg": 84,
           "gust": 6.57
        },
        "visibility": 10000,
        "pop": 0.73,
        "rain": {
           "3h": 0.26
        },
        "sys": {
           "pod": "n"
        },
        "dt_txt": "2022-10-17 03:00:00"
     },
     {
        "dt": 1665986400,
        "main": {
           "temp": 299.32,
           "feels_like": 299.32,
           "temp_min": 299.32,
           "temp_max": 299.32,
           "pressure": 1014,
           "sea_level": 1014,
           "grnd_level": 1014,
           "humidity": 75,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
           }
        ],
        "clouds": {
           "all": 62
        },
        "wind": {
           "speed": 5.13,
           "deg": 94,
           "gust": 6.03
        },
        "visibility": 10000,
        "pop": 0.76,
        "rain": {
           "3h": 0.31
        },
        "sys": {
           "pod": "n"
        },
        "dt_txt": "2022-10-17 06:00:00"
     },
     {
        "dt": 1665997200,
        "main": {
           "temp": 299.19,
           "feels_like": 299.19,
           "temp_min": 299.19,
           "temp_max": 299.19,
           "pressure": 1013,
           "sea_level": 1013,
           "grnd_level": 1013,
           "humidity": 75,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
           }
        ],
        "clouds": {
           "all": 56
        },
        "wind": {
           "speed": 4.31,
           "deg": 108,
           "gust": 5.33
        },
        "visibility": 10000,
        "pop": 0.79,
        "rain": {
           "3h": 0.21
        },
        "sys": {
           "pod": "n"
        },
        "dt_txt": "2022-10-17 09:00:00"
     },
     {
        "dt": 1666008000,
        "main": {
           "temp": 299.16,
           "feels_like": 299.16,
           "temp_min": 299.16,
           "temp_max": 299.16,
           "pressure": 1013,
           "sea_level": 1013,
           "grnd_level": 1013,
           "humidity": 75,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
           }
        ],
        "clouds": {
           "all": 41
        },
        "wind": {
           "speed": 3.26,
           "deg": 112,
           "gust": 4.16
        },
        "visibility": 10000,
        "pop": 0.7,
        "rain": {
           "3h": 0.31
        },
        "sys": {
           "pod": "d"
        },
        "dt_txt": "2022-10-17 12:00:00"
     },
     {
        "dt": 1666018800,
        "main": {
           "temp": 300.86,
           "feels_like": 303.03,
           "temp_min": 300.86,
           "temp_max": 300.86,
           "pressure": 1014,
           "sea_level": 1014,
           "grnd_level": 1014,
           "humidity": 68,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
           }
        ],
        "clouds": {
           "all": 24
        },
        "wind": {
           "speed": 3.52,
           "deg": 116,
           "gust": 3.38
        },
        "visibility": 10000,
        "pop": 0.63,
        "rain": {
           "3h": 0.28
        },
        "sys": {
           "pod": "d"
        },
        "dt_txt": "2022-10-17 15:00:00"
     },
     {
        "dt": 1666029600,
        "main": {
           "temp": 301.49,
           "feels_like": 303.63,
           "temp_min": 301.49,
           "temp_max": 301.49,
           "pressure": 1012,
           "sea_level": 1012,
           "grnd_level": 1012,
           "humidity": 64,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
           }
        ],
        "clouds": {
           "all": 37
        },
        "wind": {
           "speed": 3.89,
           "deg": 116,
           "gust": 3.12
        },
        "visibility": 10000,
        "pop": 0.88,
        "rain": {
           "3h": 0.54
        },
        "sys": {
           "pod": "d"
        },
        "dt_txt": "2022-10-17 18:00:00"
     },
     {
        "dt": 1666040400,
        "main": {
           "temp": 300.98,
           "feels_like": 303.13,
           "temp_min": 300.98,
           "temp_max": 300.98,
           "pressure": 1011,
           "sea_level": 1011,
           "grnd_level": 1011,
           "humidity": 67,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
           }
        ],
        "clouds": {
           "all": 77
        },
        "wind": {
           "speed": 3.78,
           "deg": 115,
           "gust": 3.01
        },
        "visibility": 10000,
        "pop": 0.62,
        "rain": {
           "3h": 0.53
        },
        "sys": {
           "pod": "d"
        },
        "dt_txt": "2022-10-17 21:00:00"
     },
     {
        "dt": 1666051200,
        "main": {
           "temp": 300.3,
           "feels_like": 302.26,
           "temp_min": 300.3,
           "temp_max": 300.3,
           "pressure": 1012,
           "sea_level": 1012,
           "grnd_level": 1012,
           "humidity": 70,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
           }
        ],
        "clouds": {
           "all": 89
        },
        "wind": {
           "speed": 4.4,
           "deg": 124,
           "gust": 4.39
        },
        "visibility": 10000,
        "pop": 0.69,
        "rain": {
           "3h": 0.13
        },
        "sys": {
           "pod": "n"
        },
        "dt_txt": "2022-10-18 00:00:00"
     },
     {
        "dt": 1666062000,
        "main": {
           "temp": 299.86,
           "feels_like": 301.74,
           "temp_min": 299.86,
           "temp_max": 299.86,
           "pressure": 1012,
           "sea_level": 1012,
           "grnd_level": 1012,
           "humidity": 73,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
           }
        ],
        "clouds": {
           "all": 95
        },
        "wind": {
           "speed": 3.65,
           "deg": 149,
           "gust": 4.27
        },
        "visibility": 10000,
        "pop": 0.48,
        "rain": {
           "3h": 1.54
        },
        "sys": {
           "pod": "n"
        },
        "dt_txt": "2022-10-18 03:00:00"
     },
     {
        "dt": 1666072800,
        "main": {
           "temp": 299.77,
           "feels_like": 299.77,
           "temp_min": 299.77,
           "temp_max": 299.77,
           "pressure": 1011,
           "sea_level": 1011,
           "grnd_level": 1011,
           "humidity": 74,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
           }
        ],
        "clouds": {
           "all": 64
        },
        "wind": {
           "speed": 3.21,
           "deg": 183,
           "gust": 3.95
        },
        "visibility": 10000,
        "pop": 0.45,
        "rain": {
           "3h": 0.65
        },
        "sys": {
           "pod": "n"
        },
        "dt_txt": "2022-10-18 06:00:00"
     },
     {
        "dt": 1666083600,
        "main": {
           "temp": 299.28,
           "feels_like": 299.28,
           "temp_min": 299.28,
           "temp_max": 299.28,
           "pressure": 1010,
           "sea_level": 1010,
           "grnd_level": 1010,
           "humidity": 77,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
           }
        ],
        "clouds": {
           "all": 53
        },
        "wind": {
           "speed": 3,
           "deg": 220,
           "gust": 3.89
        },
        "visibility": 10000,
        "pop": 0.3,
        "rain": {
           "3h": 0.33
        },
        "sys": {
           "pod": "n"
        },
        "dt_txt": "2022-10-18 09:00:00"
     },
     {
        "dt": 1666094400,
        "main": {
           "temp": 298.62,
           "feels_like": 299.34,
           "temp_min": 298.62,
           "temp_max": 298.62,
           "pressure": 1011,
           "sea_level": 1011,
           "grnd_level": 1011,
           "humidity": 81,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
           }
        ],
        "clouds": {
           "all": 64
        },
        "wind": {
           "speed": 3.22,
           "deg": 252,
           "gust": 4.45
        },
        "visibility": 10000,
        "pop": 0.43,
        "rain": {
           "3h": 1.35
        },
        "sys": {
           "pod": "d"
        },
        "dt_txt": "2022-10-18 12:00:00"
     },
     {
        "dt": 1666105200,
        "main": {
           "temp": 301.18,
           "feels_like": 303.23,
           "temp_min": 301.18,
           "temp_max": 301.18,
           "pressure": 1012,
           "sea_level": 1012,
           "grnd_level": 1012,
           "humidity": 65,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
           }
        ],
        "clouds": {
           "all": 40
        },
        "wind": {
           "speed": 3.53,
           "deg": 264,
           "gust": 4.28
        },
        "visibility": 10000,
        "pop": 0.93,
        "rain": {
           "3h": 0.57
        },
        "sys": {
           "pod": "d"
        },
        "dt_txt": "2022-10-18 15:00:00"
     },
     {
        "dt": 1666116000,
        "main": {
           "temp": 303.69,
           "feels_like": 305.58,
           "temp_min": 303.69,
           "temp_max": 303.69,
           "pressure": 1010,
           "sea_level": 1010,
           "grnd_level": 1010,
           "humidity": 53,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
           }
        ],
        "clouds": {
           "all": 53
        },
        "wind": {
           "speed": 3.02,
           "deg": 251,
           "gust": 4.44
        },
        "visibility": 10000,
        "pop": 0.77,
        "sys": {
           "pod": "d"
        },
        "dt_txt": "2022-10-18 18:00:00"
     },
     {
        "dt": 1666126800,
        "main": {
           "temp": 303.23,
           "feels_like": 305.17,
           "temp_min": 303.23,
           "temp_max": 303.23,
           "pressure": 1009,
           "sea_level": 1009,
           "grnd_level": 1009,
           "humidity": 55,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
           }
        ],
        "clouds": {
           "all": 96
        },
        "wind": {
           "speed": 2.42,
           "deg": 271,
           "gust": 4.16
        },
        "visibility": 10000,
        "pop": 0.48,
        "rain": {
           "3h": 0.34
        },
        "sys": {
           "pod": "d"
        },
        "dt_txt": "2022-10-18 21:00:00"
     },
     {
        "dt": 1666137600,
        "main": {
           "temp": 301.67,
           "feels_like": 303.53,
           "temp_min": 301.67,
           "temp_max": 301.67,
           "pressure": 1011,
           "sea_level": 1011,
           "grnd_level": 1011,
           "humidity": 61,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
           }
        ],
        "clouds": {
           "all": 97
        },
        "wind": {
           "speed": 4.54,
           "deg": 319,
           "gust": 5.44
        },
        "visibility": 10000,
        "pop": 0.62,
        "rain": {
           "3h": 0.21
        },
        "sys": {
           "pod": "n"
        },
        "dt_txt": "2022-10-19 00:00:00"
     },
     {
        "dt": 1666148400,
        "main": {
           "temp": 300.05,
           "feels_like": 301.53,
           "temp_min": 300.05,
           "temp_max": 300.05,
           "pressure": 1012,
           "sea_level": 1012,
           "grnd_level": 1012,
           "humidity": 66,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
           }
        ],
        "clouds": {
           "all": 86
        },
        "wind": {
           "speed": 4.25,
           "deg": 336,
           "gust": 4.83
        },
        "visibility": 10000,
        "pop": 0.53,
        "rain": {
           "3h": 0.17
        },
        "sys": {
           "pod": "n"
        },
        "dt_txt": "2022-10-19 03:00:00"
     },
     {
        "dt": 1666159200,
        "main": {
           "temp": 298.83,
           "feels_like": 299.31,
           "temp_min": 298.83,
           "temp_max": 298.83,
           "pressure": 1012,
           "sea_level": 1012,
           "grnd_level": 1012,
           "humidity": 71,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
           }
        ],
        "clouds": {
           "all": 66
        },
        "wind": {
           "speed": 4.38,
           "deg": 330,
           "gust": 4.69
        },
        "visibility": 10000,
        "pop": 0.46,
        "sys": {
           "pod": "n"
        },
        "dt_txt": "2022-10-19 06:00:00"
     },
     {
        "dt": 1666170000,
        "main": {
           "temp": 297.87,
           "feels_like": 298.33,
           "temp_min": 297.87,
           "temp_max": 297.87,
           "pressure": 1012,
           "sea_level": 1012,
           "grnd_level": 1012,
           "humidity": 74,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
           }
        ],
        "clouds": {
           "all": 66
        },
        "wind": {
           "speed": 4.24,
           "deg": 352,
           "gust": 4.55
        },
        "visibility": 10000,
        "pop": 0.07,
        "sys": {
           "pod": "n"
        },
        "dt_txt": "2022-10-19 09:00:00"
     },
     {
        "dt": 1666180800,
        "main": {
           "temp": 296.63,
           "feels_like": 296.94,
           "temp_min": 296.63,
           "temp_max": 296.63,
           "pressure": 1014,
           "sea_level": 1014,
           "grnd_level": 1014,
           "humidity": 73,
           "temp_kf": 0
        },
        "weather": [
           {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
           }
        ],
        "clouds": {
           "all": 82
        },
        "wind": {
           "speed": 6.16,
           "deg": 333,
           "gust": 6.82
        },
        "visibility": 10000,
        "pop": 0.31,
        "rain": {
           "3h": 0.13
        },
        "sys": {
           "pod": "d"
        },
        "dt_txt": "2022-10-19 12:00:00"
     }
  ],
  "city": {
     "id": 4166233,
     "name": "North Miami Beach",
     "coord": {
        "lat": 25.9445,
        "lon": -80.1747
     },
     "country": "US",
     "population": 41523,
     "timezone": -14400,
     "sunrise": 1665746332,
     "sunset": 1665788050
  }
};

describe("forecastApi", () => {
  const latitude = 25.9445;
  const longitude = -80.1747;
  const city = "North Miami Beach";
  const invalidCity = "North Miami Beac"

  const forecastApiCityInvalidMockedResponse = {
    "cod": "404",
    "message": "city not found"
  }

  const badRequest = 400;

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("returns forecast data from the OpenWeather API by lat and lon", async () => {
    fetch.mockResponseOnce(JSON.stringify(forecastApiMockedResponse));
    const forecastApiResponse = await getForecastByLatLon(latitude, longitude);
    expect(forecastApiResponse).toEqual(forecastApiMockedResponse);
  })

  it("returns forecast data from the OpenWeather API by city", async () => {
    fetch.mockResponseOnce(JSON.stringify(forecastApiMockedResponse));
    const forecastApiResponse = await getForecastByCity(city);
    expect(forecastApiResponse).toEqual(forecastApiMockedResponse);
  })

  it('throws an exception if the response is not OK (200)', async () => {
   fetch.mockResponseOnce(JSON.stringify(forecastApiCityInvalidMockedResponse), { status: badRequest })

   let result;
   try {
      await getForecastByCity(invalidCity);
   } catch (e) {
      result = e;
   }

   expect(result).toEqual(forecastApiCityInvalidMockedResponse);
  })

  it("returns an error if missing city", async () => {
    let result = null;
    try {
      await getForecastByCity(); // Missing city
    } catch(e) {
      result = e
    }
    expect(result).toMatch(ERROR_INVALID_CITY);
  })

  it("returns an error if missing lat and lon", async () => {
    let result = null;

    try {
      await getForecastByLatLon(); // Missing lat and lon
    } catch(e) {
      result = e
    }

    expect(result).toMatch(ERROR_INVALID_LAT_LON);
  })

})