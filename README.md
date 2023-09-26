# Crack Detective

This project focuses on creating a computer-vision based solution which will identify cracks and dents on any large objects such as vehicles and big manufacturing subsystems using image processing and machine learning algorithms. The detected cracks and dents of the scanned images will then be highlighted using visualization and saved to a database.

This project is also based on creating a Dimension Measurement solution using Image Processing techniques. The solution will be able to accurately measure the dimensions of simple objects such as square, triangle, polygon, etc. as per the scale set. Dimensions are displayed in the desired units (mm, cm) along with any relevant visual indicators of quality inspection results.

## Computer Vision based Crack and Dent Detection

Surface crack detection using Computer Vision involves Image Processing techniques to automatically identify and locate cracks on surfaces. Processing of captured images using computer vision libraries, like OpenCV involves several tasks , ```including image enhancement, edge detection and texture analysis```. On extracting image features, the images are analysed by ```Faster R-CNN (Region-based Convolutional Neural Networks)``` ML models used for crack detection. For highlighting the crack and dent areas, Visualization techniques like Bounding Box Visualization is used.

The various processes and algorithms used are explained further.

### Getting Started 

This project is developed using FLask as the backend and React for the frontend. User registration and authentication is implemented using Firebase and the image results are saved in a database, for which MongoDB is used.

### Image Preprocessing - Bilateral Filter

The bilateral filter is a non-linear filter that reduces noise while preserving edges and fine details in the image. It considers both the spatial distance and intensity similarity between pixels when applying the filtering operation. It is used as a preprocessing step to reduce noise and enhance the quality of the images before applying crack detection algorithms. The bilateral filter is a non-linear filter that effectively reduces noise while preserving edges and fine details.

### Image Enhancement - Adaptive Histogram Equalization (AHE)

AHE is an extension of histogram equalization that enhances local contrast by applying histogram equalization to small regions within the image. It is particularly useful when there are significant variations in contrast across different regions of the image.

### Feature Extraction

#### Edge Detection

##### Canny Edge Detection
This algorithm identifies edges in an image based on gradient magnitude and thresholding. It can highlight sharp transitions and boundaries, which can be indicative of cracks or dents.

##### Texture Analysis

In the context of crack detection, the Gabor filter is a commonly used image processing technique that can be employed to enhance crack-like structures and capture texture information. The Gabor filter is specifically designed to analyze textures and detect edges in images. It is based on the concept of Gabor functions, which are a set of sinusoidal waveforms modulated by a Gaussian envelope.

### Machine Learning Algorithms - Faster R-CNN (Region-based Convolutional Neural Networks)

Faster R-CNN is a widely used object detection algorithm that combines deep learning and region proposal methods. It consists of two main components: ```a region proposal network (RPN) and a region classification network```. RPN generates a set of region proposals by sliding a small network over the convolutional feature map of the input image. These proposals are potential regions of interest that may contain cracks. The region classification network takes the proposed regions as input and classifies them into different categories, such as cracks or background
Faster R-CNN is known for its accuracy and can effectively detect and localize cracks within an image. It provides both the presence and location information of the detected cracks.

## Dimension Measurement & Quality Inspection using Mobile Camera

Dimension Measurement of images involves image processing techniques and thresholding for quality inspection algorithms. Technologies needed for processing of captured images include ```image cropping, resizing, denoising and color normalization```. Faster R-CNN (Region-based Convolutional Neural Networks) model is trained with a dataset containing annotated images of the desired objects (square, triangle, polygon) used for object detection. Based on the object type specific algorithms are applied to calculate dimensions after Contour Extraction and Edge Detection. Pixel dimensions are converted to real-world units using a calibrated reference scale whose length is known.

The various processes and algorithms used are explained further.

### Image Preprocessing

We Apply preprocessing techniques to enhance the image quality and remove any noise or distortions. Techniques  include image cropping, resizing, denoising, and color normalization. Here first step we apply grayscale to our RGB image then we apply Gaussian blur. 

#### Gaussian Blur
Gaussian blur works by convolving the image with a Gaussian kernel, which is a weighted averaging filter. Gaussian blur helps in reducing noise present in the image, such as sensor noise or compression artifacts, that may affect the accuracy of subsequent inspection algorithms. By smoothing out the image, it can enhance the visibility and clarity of object features and reduce the impact of noise on quality inspection results.

#### Thresholding
Thresholding is  applied as a preprocessing or image analysis step in quality inspection algorithms. It is a commonly used technique that helps to separate objects or regions of interest from the background based on their pixel intensity values. 

#### Erosion and Dilation

We apply dilation and erosion which improve image accuracy. These operations are often used to manipulate and enhance the shape, size, and connectivity of objects in an image.
Erosion and dilation effectively reduces noise present in the image. Erosion erodes away the boundary pixels, while dilation expands the object boundaries. By applying erosion, small noisy regions will be eliminated.

### Scale Calibration

Before measuring the dimensions, a reference scale has to be set in the image. This scale will have a known length. A calibration object (e.g., a ruler or known-sized reference object) is placed next to the target object in the image. The dimensions of the calibration object are extracted using the same contour extraction.

### Dimension Conversion
The measured dimensions are converted from pixel values to real-world units (e.g., millimeters, centimeters) using the calibrated reference scale. The conversion factor is determined by comparing the known length of the calibration object with its measured length in pixels. The conversion factor to the measured dimensions of the target object is applied to obtain accurate real-world measurements.
