import joblib
import numpy as np
import gradio as gr

# Load model and scaler
best_model = joblib.load('best_weather_model.pkl')
scaler = joblib.load('scaler.pkl')

def predict_rain(min_temp, max_temp, humidity9am, humidity3pm, pressure9am, pressure3pm, cloud9am, cloud3pm):
    """Predict rain tomorrow based on weather parameters"""
    input_data = np.array([[min_temp, max_temp, humidity9am, humidity3pm, pressure9am, pressure3pm, cloud9am, cloud3pm]])
    input_scaled = scaler.transform(input_data)
    
    prediction = best_model.predict(input_scaled)[0]
    probability = best_model.predict_proba(input_scaled)[0]
    
    result = "Rain Tomorrow" if prediction == 1 else "No Rain Tomorrow"
    confidence = probability[1] if prediction == 1 else probability[0]
    
    return f"Prediction: {result}\nConfidence: {confidence:.2%}"

# Create interface
iface = gr.Interface(
    fn=predict_rain,
    inputs=[
        gr.Number(label="Min Temperature (°C)", value=15.0),
        gr.Number(label="Max Temperature (°C)", value=25.0),
        gr.Number(label="Humidity 9am (%)", value=70.0),
        gr.Number(label="Humidity 3pm (%)", value=50.0),
        gr.Number(label="Pressure 9am (hPa)", value=1015.0),
        gr.Number(label="Pressure 3pm (hPa)", value=1013.0),
        gr.Slider(label="Cloud Cover 9am (oktas)", minimum=0, maximum=8, value=3),
        gr.Slider(label="Cloud Cover 3pm (oktas)", minimum=0, maximum=8, value=2)
    ],
    outputs=gr.Textbox(label="Weather Prediction"),
    title="Weather Rain Prediction System",
    description="Predict whether it will rain tomorrow based on today's weather conditions",
    examples=[
        [10, 20, 85, 75, 1005, 1003, 7, 8],  # Likely rain
        [15, 25, 45, 35, 1020, 1018, 1, 1],   # Likely no rain
        [12, 22, 65, 55, 1015, 1013, 4, 3]    # Moderate conditions
    ]
)

if __name__ == "__main__":
    iface.launch(share=True)