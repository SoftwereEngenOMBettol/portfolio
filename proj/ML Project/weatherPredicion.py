import pandas as pd
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
import joblib
import matplotlib.pyplot as plt
import seaborn as sns

# Load data
data = pd.read_csv(r"C:\Users\dnanmol\OneDrive - ict.edu.om\SOFTWARE ENGINEERING\SEMSTER -1  BACHELOR 4 YEAR\ML\Project\weather.csv")


# Load data
df = pd.read_csv('weather.csv')
print(f"Dataset shape: {df.shape}")

# Data Preprocessing
print("\nDATA PREPROCESSING")
print("Missing values:")
print(df.isnull().sum())
df = df.dropna()

# Create target variable (RainTomorrow: Yes->1, No->0)
df['RainTomorrow'] = df['RainTomorrow'].map({'Yes': 1, 'No': 0})

# Select features (using meaningful weather parameters)
features = ['MinTemp', 'MaxTemp', 'Humidity9am', 'Humidity3pm', 'Pressure9am', 'Pressure3pm', 'Cloud9am', 'Cloud3pm']
X = df[features]
y = df['RainTomorrow']

print(f"\nTarget distribution:\n{y.value_counts()}")
print(f"Rain percentage: {(y.sum()/len(y))*100:.2f}%")

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

# Scale features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Model Training with Hyperparameter Tuning
print("\nMODEL TRAINING")

rf = GridSearchCV(RandomForestClassifier(random_state=42), 
                 {'n_estimators': [100, 200], 'max_depth': [5, 10]}, 
                 cv=5, scoring='accuracy')
rf.fit(X_train_scaled, y_train)

gb = GridSearchCV(GradientBoostingClassifier(random_state=42), 
                 {'n_estimators': [100, 200], 'learning_rate': [0.1, 0.2]}, 
                 cv=5, scoring='accuracy')
gb.fit(X_train_scaled, y_train)

# Evaluation
rf_acc = accuracy_score(y_test, rf.predict(X_test_scaled))
gb_acc = accuracy_score(y_test, gb.predict(X_test_scaled))

print(f"\nMODEL PERFORMANCE")
print(f"Random Forest Accuracy: {rf_acc:.4f}")
print(f"Gradient Boosting Accuracy: {gb_acc:.4f}")

print("Random Forest Detailed Report:")
print(classification_report(y_test, rf.predict(X_test_scaled)))
print("Gradient Boosting Detailed Report:")  
print(classification_report(y_test, gb.predict(X_test_scaled)))

# Select best model
best_model, best_name = (rf, "Random Forest") if rf_acc >= gb_acc else (gb, "Gradient Boosting")
print(f"Best Model: {best_name}")

# Save model
joblib.dump(best_model, 'best_weather_model.pkl')
joblib.dump(scaler, 'scaler.pkl')
print("Model saved successfully!")

# Detailed report
print("\nDetailed Classification Report:")
print(classification_report(y_test, best_model.predict(X_test_scaled)))

# Confusion Matrix
plt.figure(figsize=(8, 6))
cm = confusion_matrix(y_test, best_model.predict(X_test_scaled))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues')
plt.title('Confusion Matrix')
plt.xlabel('Predicted')
plt.ylabel('Actual')
plt.show()