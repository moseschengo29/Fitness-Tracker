'use strict';

// // prettier-ignore
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// const form = document.querySelector('.form');
// const containerWorkouts = document.querySelector('.workouts');
// const inputType = document.querySelector('.form__input--type');
// const inputDistance = document.querySelector('.form__input--distance');
// const inputDuration = document.querySelector('.form__input--duration');
// const inputCadence = document.querySelector('.form__input--cadence');
// const inputElevation = document.querySelector('.form__input--elevation');

// class Workout {
//   date = new Date();
//   id = (Date.now() + '').slice(-10);

//   constructor(coords, distance, duration) {
//     this.coords = coords; // [lat ,lng]
//     this.distance = distance; // in km
//     this.duration = duration; // in min
//   }
// }

// class Running extends Workout {
//   type = 'running';
//   constructor(coords, distance, duration, cadence) {
//     super(coords, distance, duration);
//     this.cadence = cadence;

//     this.calcPace();
//   }

//   calcPace() {
//     this.pace = this.duration / this.distance;
//     return this.pace;
//   }
// }

// class Cycling extends Workout {
//   type = 'cycling';

//   constructor(coords, distance, duration, elevationGain) {
//     super(coords, distance, duration);
//     this.elevationGain = elevationGain;

//     this.calcSpeed();
//   }

//   calcSpeed() {
//     this.speed = this.distance / (this.duration / 60);
//     return this.speed;
//   }
// }

// // APPLICATION
// class App {
//   #map;
//   #mapEvent;
//   #worksouts = [];

//   constructor() {
//     this.__getPosition();
//     form.addEventListener('submit', this.__newWorkout.bind(this));
//     inputType.addEventListener('change', this.__toggleElevation.bind(this));
//   }

//   __getPosition() {
//     navigator.geolocation.getCurrentPosition(
//       this.__loadMap.bind(this),
//       function () {
//         alert('Could not get your position');
//       }
//     );
//   }

//   __loadMap(position) {
//     const { latitude } = position.coords;
//     const { longitude } = position.coords;
//     console.log(
//       `https://www.google.com/maps/@${latitude},${longitude},15z?entry=ttu`
//     );

//     const coords = [latitude, longitude];
//     this.#map = L.map('map').setView(coords, 16);

//     L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(this.#map);

//     // Handling clicks on the map
//     this.#map.on('click', this.__showForm.bind(this));
//   }

//   __showForm(mapE) {
//     this.#mapEvent = mapE;
//     form.classList.remove('hidden');
//     inputDistance.focus();
//   }

//   __toggleElevation() {
//     inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//     inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
//   }

//   __newWorkout(e) {
//     const validInputs = (...inputs) =>
//       inputs.every(inp => Number.isFinite(inp));
//     e.preventDefault();

//     const allPositive = (...inputs) => inputs.every(inp => inp > 0);

//     //Get data from the form
//     const type = inputType.value;
//     const distance = +inputDistance.value;
//     const duration = +inputDuration.value;
//     const { lat, lng } = this.#mapEvent.latlng;
//     let workout;

//     //If Workout running, create running object
//     if (type === 'running') {
//       const cadence = +inputCadence.value;
//       //Check if data is valid
//       if (
//         // !Number.isFinite(distance) ||
//         // !Number.isFinite(duration) ||
//         // !Number.isFinite(cadence)
//         !validInputs(distance, duration, cadence) ||
//         !allPositive(distance, duration, cadence)
//       )
//         return alert('Inputs have to be a positive number');

//       workout = new Running([lat, lng], distance, duration, cadence);
//     }

//     //If cycling, create cycling object
//     if (type === 'cycling') {
//       const elevation = +inputElevation.value;

//       if (
//         !validInputs(distance, duration, elevation) ||
//         !allPositive(distance, duration)
//       )
//         return alert('Inputs have to be a positive number');

//       workout = new Cycling([lat, lng], distance, duration, elevation);
//     }

//     //Add new object to workout array`
//     this.#worksouts.push(workout);
//     console.log(workout);

//     //render workout on field as a marker
//     this._renderWorkoutMarker(workout);

//     // clear input fields
//     inputDuration.value =
//       inputCadence.value =
//       inputDistance.value =
//       inputElevation.value =
//         '';
//   }

//   _renderWorkoutMarker(workout) {
//     L.marker(workout.coords)
//       .addTo(this.#map)
//       .bindPopup(
//         L.popup({
//           maxWidth: 250,
//           minWidth: 100,
//           autoClose: false,
//           closeOnClick: false,
//           className: `${workout.type}-popup`,
//         })
//       )
//       .setPopupContent('running')
//       .openPopup();
//   }
// }

// const app = new App();
