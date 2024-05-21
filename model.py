import cv2
import numpy as np
from skimage import feature

def apply_lbp(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    lbp = feature.local_binary_pattern(gray, P=8, R=1, method="uniform")
    return lbp.flatten()

def apply_hog(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    hog_features = feature.hog(gray, orientations=9, pixels_per_cell=(8, 8),
                               cells_per_block=(2, 2), block_norm='L2-Hys')
    return hog_features

# Load image
image = cv2.imread('example_image.jpg')

# Apply LBP
lbp_features = apply_lbp(image)

# Apply HOG
hog_features = apply_hog(image)

# Combine LBP and HOG features
combined_features = np.concatenate((lbp_features, hog_features))

# Reshape the combined feature vector into a single row
combined_features = combined_features.reshape(1, -1)

# Create a single-channel image from the combined feature vector
combined_image = combined_features.reshape(1, -1)

# Display the combined feature image
cv2.imshow('Combined Feature Image', combined_image.astype('uint8'))
cv2.waitKey(0)
cv2.destroyAllWindows()