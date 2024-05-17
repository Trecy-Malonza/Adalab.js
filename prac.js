
// function findUniqueItems(items) {
//     // Create a Set to track seen items
//     const seenItems = new Set();
//     // Array to hold unique items
//     let uniqueItems = [];

//     // Iterate over the items array
//     for (const item of items) {
//         // If the item has not been seen yet
//         if (!seenItems.has(item)) {
//             // Add the item to the set of seen items
//             seenItems.add(item);
//             // And also add it to the unique items array
//             uniqueItems.push(item);
//         }
//     }

//     // Return the array of unique items
//     return uniqueItems;
// }

// // Example usage
// const items = ['apple', 'banana', 'cherry', 'apple', 'banana'];
// console.log(findUniqueItems(items)); // Output: ['cherry']

class FabricDesign {
    constructor(name, colorScheme) {
        this.name = name;
        this.colorScheme = colorScheme; // This could be an array of colors or a pattern
    }

    updateDesign(newColorScheme) {
        this.colorScheme = newColorScheme;
    }
}

class TemperatureSensor {
    constructor() {
        // Simulate getting temperature data
        this.temperature = Math.floor(Math.random() * 30 + 20); // Random temperature between 20°C and 50°C
    }

    getCurrentTemperature() {
        return this.temperature;
    }
}

class MoodSensor {
    constructor() {
        // Simulate getting mood data
        this.mood = ['happy', 'sad', 'neutral'][Math.floor(Math.random() * 3)]; // Random mood
    }

    getCurrentMood() {
        return this.mood;
    }
}

class Predictor {
    constructor(fabricDesign) {
        this.fabricDesign = fabricDesign;
        this.temperatureSensor = new TemperatureSensor();
        this.moodSensor = new MoodSensor();
    }

    predictNewDesign() {
        const temperature = this.temperatureSensor.getCurrentTemperature();
        const mood = this.moodSensor.getCurrentMood();

        // Example logic to decide on new design
        if (mood === 'happy' && temperature > 25) {
            this.fabricDesign.updateDesign(['bright', 'vibrant']); // Update to bright and vibrant colors
        } else if (mood === 'sad' || temperature < 15) {
            this.fabricDesign.updateDesign(['dark', 'muted']); // Update to dark and muted colors
        } else {
            this.fabricDesign.updateDesign(this.fabricDesign.colorScheme); // Keep the current design
        }
    }
}

// Example usage
const myAnkaraDesign = new FabricDesign('Traditional', ['red', 'black']);
const predictor = new Predictor(myAnkaraDesign);
predictor.predictNewDesign(); // Predicts the new design based on simulated sensor data
